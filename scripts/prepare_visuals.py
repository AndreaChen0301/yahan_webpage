from pathlib import Path
from PIL import Image

ROOT = Path("/Users/yahanchen/Desktop/job/advancy")
OUT = ROOT / "portfolio/public/project-visuals"
OUT.mkdir(parents=True, exist_ok=True)

def save_crop(source: str, name: str, box=None):
    image = Image.open(ROOT / source).convert("RGB")
    if box:
        image = image.crop(box)
    image.save(OUT / name, quality=91, optimize=True)

save_crop("tmp/pdfs/data_for_good/page-09.jpg", "data-for-good-map.jpg")
save_crop("tmp/pdfs/stat405_slides/page-05.jpg", "steam-hpc-pipeline.jpg")
save_crop("tmp/pdfs/stat405_slides/page-07.jpg", "steam-word-clouds.jpg")

# Chart areas from the rendered LIS 501 paper pages.
lis_language = Image.open(ROOT / "tmp/pdfs/lis501/page-06.jpg").convert("RGB")
w, h = lis_language.size
lis_language.crop((int(w * .20), int(h * .30), int(w * .82), int(h * .67))).save(
    OUT / "counseling-language.jpg", quality=92, optimize=True
)

lis_terms = Image.open(ROOT / "tmp/pdfs/lis501/page-09.jpg").convert("RGB")
w, h = lis_terms.size
lis_terms.crop((int(w * .17), int(h * .02), int(w * .84), int(h * .39))).save(
    OUT / "counseling-medical-terms.jpg", quality=92, optimize=True
)
