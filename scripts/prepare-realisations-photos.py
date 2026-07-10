#!/usr/bin/env python3
"""Convert selected project photos to optimized WebP for the website.

Source: ~/Documents/PhotosRealisations (originals untouched).
The team photo is an iPhone screenshot with white bands top/bottom;
we auto-detect and crop the photographic block before converting.
"""

from pathlib import Path

import numpy as np
from PIL import Image

SRC = Path.home() / "Documents" / "PhotosRealisations"
PUBLIC = Path(__file__).resolve().parents[1] / "public"

QUALITY = 82

PHOTOS = [
    ("PHOTO-2026-07-02-23-38-03 4.jpg", "realisations/plateau-tertiaire-chantier.webp", False),
    ("PHOTO-2026-07-02-23-38-03 6.jpg", "realisations/plateau-tertiaire-livraison.webp", False),
    ("PHOTO-2026-07-03-00-00-15.jpg", "realisations/rue-de-lausanne-119-surelevation.webp", False),
    ("PHOTO-2026-07-03-00-00-16 3.jpg", "realisations/credit-suisse-rue-du-rhone-accueil.webp", False),
    ("PHOTO-2026-07-03-00-00-16 4.jpg", "realisations/credit-suisse-rue-du-rhone-hall.webp", False),
    ("PHOTO-2026-07-03-00-06-33.jpg", "equipe/preparation-chantier.webp", True),
]


def crop_screenshot_bands(img: Image.Image) -> Image.Image:
    """Keep the largest contiguous block of non-white rows (the actual photo)."""
    gray = np.asarray(img.convert("L"), dtype=np.float64)
    row_mean = gray.mean(axis=1)
    row_std = gray.std(axis=1)
    is_content = ~((row_mean > 240) & (row_std < 14))

    best_start, best_len = 0, 0
    start = None
    for i, flag in enumerate([*is_content, False]):
        if flag and start is None:
            start = i
        elif not flag and start is not None:
            if i - start > best_len:
                best_start, best_len = start, i - start
            start = None

    if best_len == 0:
        return img
    return img.crop((0, best_start, img.width, best_start + best_len))


def main() -> None:
    for src_name, dest_rel, crop in PHOTOS:
        src_path = SRC / src_name
        dest_path = PUBLIC / dest_rel
        dest_path.parent.mkdir(parents=True, exist_ok=True)

        img = Image.open(src_path)
        img = img.convert("RGB")
        if crop:
            img = crop_screenshot_bands(img)

        img.save(dest_path, format="WEBP", quality=QUALITY, method=6)
        print(f"{src_name} -> {dest_rel} ({img.width}x{img.height})")


if __name__ == "__main__":
    main()
