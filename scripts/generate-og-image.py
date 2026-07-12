#!/usr/bin/env python3
"""Generate the default Open Graph image (1200x630 JPG) for markajrenting.ch."""

from __future__ import annotations

import re
import subprocess
import tempfile
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
WIDTH, HEIGHT = 1200, 630
OUT = ROOT / "public" / "og-default.jpg"
BRAND = ROOT / "public" / "brand"
FAVICON_SVG = BRAND / "markaj-favicon.svg"
TEXT_SVG = BRAND / "markaj-textonly-horizontal.svg"

NAVY = (10, 43, 94)
NAVY_DEEP = (6, 30, 68)
WHITE = (253, 253, 253)
CREPI = (219, 207, 176)
MINERAL_LIGHT = (176, 182, 194)

SLASH_D_PREFIXES = ("M536.495", "M502.701")

SANS_CANDIDATES = [
    "/System/Library/Fonts/Helvetica.ttc",
    "/System/Library/Fonts/Supplemental/Arial.ttf",
]


def load_font(candidates: list[str], size: int) -> ImageFont.FreeTypeFont:
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def is_slash_path(path_d: str) -> bool:
    return any(path_d.startswith(prefix) for prefix in SLASH_D_PREFIXES)


def is_background_path(path_d: str) -> bool:
    return (
        path_d.startswith("M8100")
        or path_d.startswith("M-4050")
        or path_d.startswith("M4050")
        or ("h4000v3000" in path_d[:48])
    )


def recolor_svg_for_dark_bg(svg: str) -> str:
    """White logo on dark backgrounds, with crepi accent on the slash (footer rule)."""

    def fix_path(match: re.Match[str]) -> str:
        tag = match.group(0)
        d_match = re.search(r'd="([^"]+)"', tag)
        if not d_match:
            return tag

        path_d = d_match.group(1)
        if is_background_path(path_d) or "fill:none" in tag:
            return tag

        if is_slash_path(path_d) or "dfdfdf" in tag.lower():
            fill = "#DBCFB0"
        else:
            fill = "#FFFFFF"

        tag = re.sub(r'\s*style="[^"]*"', "", tag)
        if 'fill="' in tag:
            tag = re.sub(r'fill="[^"]*"', f'fill="{fill}"', tag)
        else:
            tag = tag.replace("<path ", f'<path fill="{fill}" ', 1)
        return tag

    svg = re.sub(r"<path[^>]*/>", fix_path, svg)
    if 'fill="#FFFFFF"' not in svg[:300]:
        svg = re.sub(r"<svg([^>]*)>", r'<svg\1 fill="#FFFFFF">', svg, count=1)
    return svg


def render_svg_to_png(
    svg_content: str,
    output_png: Path,
    *,
    fit_width: int | None = None,
    fit_height: int | None = None,
) -> Image.Image:
    with tempfile.NamedTemporaryFile("w", suffix=".svg", delete=False) as tmp:
        tmp.write(svg_content)
        tmp_path = Path(tmp.name)

    cmd = ["npx", "--yes", "@resvg/resvg-js-cli", "--no-system-font"]
    if fit_width is not None:
        cmd.extend(["--fit-width", str(fit_width)])
    if fit_height is not None:
        cmd.extend(["--fit-height", str(fit_height)])
    cmd.extend([str(tmp_path), str(output_png)])

    subprocess.run(cmd, check=True, cwd=ROOT)
    tmp_path.unlink(missing_ok=True)
    return Image.open(output_png).convert("RGBA")


def build_background() -> Image.Image:
    """Vertical navy gradient with a whisper of grain."""
    y = np.linspace(0, 1, HEIGHT)[:, None]
    top = np.array(NAVY, dtype=np.float64)
    bottom = np.array(NAVY_DEEP, dtype=np.float64)
    gradient = top * (1 - y) + bottom * y
    base = np.repeat(gradient[:, None, :], WIDTH, axis=1)

    rng = np.random.default_rng(7)
    grain = rng.normal(0, 3.2, size=(HEIGHT, WIDTH, 1))
    arr = np.clip(base + grain, 0, 255).astype(np.uint8)
    return Image.fromarray(arr, mode="RGB")


def paste_rgba(base: Image.Image, overlay: Image.Image, position: tuple[int, int]) -> None:
    base.paste(overlay, position, overlay)


def main() -> None:
    if not FAVICON_SVG.exists():
        raise FileNotFoundError(f"Missing favicon SVG: {FAVICON_SVG}")
    if not TEXT_SVG.exists():
        raise FileNotFoundError(f"Missing text logo SVG: {TEXT_SVG}")

    img = build_background()
    draw = ImageDraw.Draw(img)
    sans_sub = load_font(SANS_CANDIDATES, 30)
    sans_small = load_font(SANS_CANDIDATES, 24)
    margin = 90

    with tempfile.TemporaryDirectory() as tmp_dir:
        tmp = Path(tmp_dir)

        favicon_png = render_svg_to_png(
            recolor_svg_for_dark_bg(FAVICON_SVG.read_text()),
            tmp / "favicon.png",
            fit_height=250,
        )
        text_png = render_svg_to_png(
            recolor_svg_for_dark_bg(TEXT_SVG.read_text()),
            tmp / "text.png",
            fit_width=720,
        )

    paste_rgba(img, favicon_png, (margin, 115))
    text_y = 388
    paste_rgba(img, text_png, (margin, text_y))

    rule_y = text_y + text_png.height + 18
    rule_width = max(320, text_png.width)
    draw.line([(margin, rule_y), (margin + rule_width, rule_y)], fill=CREPI, width=3)

    tagline_y = rule_y + 22
    draw.text(
        (margin, tagline_y),
        "Plâtrerie · Peinture · Faux-plafonds · Isolation · Rénovation",
        font=sans_sub,
        fill=MINERAL_LIGHT,
    )
    draw.text(
        (margin, tagline_y + 48),
        "Entreprise familiale à Fribourg — 20 ans d'expérience",
        font=sans_small,
        fill=CREPI,
    )

    url_text = "markajrenting.ch"
    bbox = draw.textbbox((0, 0), url_text, font=sans_small)
    draw.text(
        (WIDTH - margin - (bbox[2] - bbox[0]), HEIGHT - 82),
        url_text,
        font=sans_small,
        fill=MINERAL_LIGHT,
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, format="JPEG", quality=88, optimize=True)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
