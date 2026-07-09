#!/usr/bin/env python3
"""Generate the default Open Graph image (1200x630 JPG) for markajrenting.ch."""

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont

WIDTH, HEIGHT = 1200, 630
OUT = Path(__file__).resolve().parents[1] / "public" / "og-default.jpg"

NAVY = (10, 43, 94)
NAVY_DEEP = (6, 30, 68)
WHITE = (253, 253, 253)
CREPI = (219, 207, 176)
MINERAL_LIGHT = (176, 182, 194)

SERIF_CANDIDATES = [
    "/System/Library/Fonts/Supplemental/Georgia.ttf",
    "/System/Library/Fonts/Supplemental/Times New Roman.ttf",
    "/Library/Fonts/Georgia.ttf",
]
SANS_CANDIDATES = [
    "/System/Library/Fonts/Helvetica.ttc",
    "/System/Library/Fonts/Supplemental/Arial.ttf",
]


def load_font(candidates: list[str], size: int) -> ImageFont.FreeTypeFont:
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


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


def main() -> None:
    img = build_background()
    draw = ImageDraw.Draw(img)

    serif_mono = load_font(SERIF_CANDIDATES, 170)
    serif_title = load_font(SERIF_CANDIDATES, 64)
    sans_sub = load_font(SANS_CANDIDATES, 30)
    sans_small = load_font(SANS_CANDIDATES, 24)

    margin = 90

    # Monogram MR with the diagonal slash, echoing the logo
    draw.text((margin, 120), "M", font=serif_mono, fill=WHITE)
    draw.text((margin + 145, 150), "R", font=serif_mono, fill=WHITE)
    draw.line(
        [(margin + 62, 330), (margin + 235, 118)],
        fill=CREPI,
        width=5,
    )

    # Company name
    draw.text((margin, 388), "MARKAJ RENTING SA", font=serif_title, fill=WHITE)

    # Crepi rule under the name
    draw.line([(margin, 478), (margin + 320, 478)], fill=CREPI, width=3)

    # Tagline
    draw.text(
        (margin, 500),
        "Plâtrerie · Peinture · Faux-plafonds · Isolation · Rénovation",
        font=sans_sub,
        fill=MINERAL_LIGHT,
    )
    draw.text(
        (margin, 548),
        "Entreprise familiale à Fribourg — 20 ans d'expérience",
        font=sans_small,
        fill=CREPI,
    )

    # Site URL bottom-right
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
