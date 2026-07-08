#!/usr/bin/env python3
"""Generate seamless Markaj textures (1024px WebP). Toroidal noise for perfect tiling."""

from __future__ import annotations

import math
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

SIZE = 1024
OUT = Path(__file__).resolve().parents[1] / "public" / "textures"

PALETTE = {
    "navy": (0x06, 0x25, 0x53),
    "mineral": (0x6F, 0x70, 0x80),
    "stone": (0xAF, 0xA8, 0xA3),
    "sand": (0xD5, 0xCF, 0xC9),
    "warm": (0xEC, 0xE7, 0xE0),
    "white": (0xFD, 0xFD, 0xFD),
}


def mix_rgb(a: np.ndarray, b: np.ndarray, t: np.ndarray) -> np.ndarray:
    t = t[..., None]
    return (a * (1 - t) + b * t).astype(np.uint8)


def periodic_noise(freqs: list[tuple[float, float, float]]) -> np.ndarray:
    """Seamless noise on a torus — integer frequencies tile at SIZE."""
    y, x = np.mgrid[0:SIZE, 0:SIZE]
    nx = x / SIZE * 2 * math.pi
    ny = y / SIZE * 2 * math.pi
    value = np.zeros((SIZE, SIZE), dtype=np.float64)
    for fx, fy, amp in freqs:
        value += amp * np.sin(fx * nx + fy * ny)
    value -= value.min()
    value /= value.max() + 1e-9
    return value


def blur_seamless(arr: np.ndarray, radius: float) -> np.ndarray:
    img = Image.fromarray((arr * 255).astype(np.uint8), mode="L")
    blurred = img.filter(ImageFilter.GaussianBlur(radius=radius))
    return np.asarray(blurred, dtype=np.float64) / 255.0


def generate_noise_soft() -> Image.Image:
    base = np.array(PALETTE["white"], dtype=np.float64)
    warm = np.array(PALETTE["warm"], dtype=np.float64)
    sand = np.array(PALETTE["sand"], dtype=np.float64)

    # Fine grain — high frequencies, very low contrast
    n = periodic_noise(
        [
            (18, 0, 0.35),
            (0, 22, 0.35),
            (31, 27, 0.2),
            (47, 41, 0.12),
            (63, 59, 0.08),
        ]
    )
    n = blur_seamless(n, 0.6)

    t = n * 0.55
    layer = mix_rgb(
        np.broadcast_to(base, (SIZE, SIZE, 3)),
        np.broadcast_to(warm, (SIZE, SIZE, 3)),
        t,
    )
    # Second pass with sand at even lower weight
    t2 = (1 - n) * 0.18
    layer = mix_rgb(layer, np.broadcast_to(sand, (SIZE, SIZE, 3)), t2)
    return Image.fromarray(layer, mode="RGB")


def generate_plaster_soft() -> Image.Image:
    base = np.array(PALETTE["warm"], dtype=np.float64)
    sand = np.array(PALETTE["sand"], dtype=np.float64)
    stone = np.array(PALETTE["stone"], dtype=np.float64)

    # Soft mineral diffuse — low frequency, heavily blurred
    n = periodic_noise(
        [
            (3, 0, 0.4),
            (0, 4, 0.4),
            (5, 5, 0.25),
            (8, 6, 0.15),
        ]
    )
    n = blur_seamless(n, 3.5)

    layer = mix_rgb(
        np.broadcast_to(base, (SIZE, SIZE, 3)),
        np.broadcast_to(sand, (SIZE, SIZE, 3)),
        n * 0.45,
    )
    t2 = np.clip(n * 0.25, 0, 1)
    layer = mix_rgb(layer, np.broadcast_to(stone, (SIZE, SIZE, 3)), t2)
    return Image.fromarray(layer, mode="RGB")


def generate_concrete_smooth() -> Image.Image:
    base = np.array(PALETTE["sand"], dtype=np.float64)
    stone = np.array(PALETTE["stone"], dtype=np.float64)

    # Smooth architectural concrete — medium-low frequency, soft
    n = periodic_noise(
        [
            (6, 0, 0.35),
            (0, 7, 0.35),
            (11, 9, 0.2),
            (17, 13, 0.1),
        ]
    )
    n = blur_seamless(n, 2.0)

    layer = mix_rgb(
        np.broadcast_to(base, (SIZE, SIZE, 3)),
        np.broadcast_to(stone, (SIZE, SIZE, 3)),
        n * 0.38,
    )
    return Image.fromarray(layer, mode="RGB")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    textures = [
        ("markaj-noise-soft-01.webp", generate_noise_soft),
        ("markaj-plaster-soft-01.webp", generate_plaster_soft),
        ("markaj-concrete-smooth-01.webp", generate_concrete_smooth),
    ]
    for name, fn in textures:
        img = fn()
        path = OUT / name
        img.save(path, format="WEBP", quality=92, method=6)
        print(f"Wrote {path}")


if __name__ == "__main__":
    main()
