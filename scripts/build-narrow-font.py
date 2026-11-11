"""Build the site's condensed Chinese font from the OFL-licensed Noto Sans SC.

Requires `fonttools` and `brotli` in Python. The generated WOFF2 subsets are
committed so the website build itself does not need Python.
"""

from pathlib import Path
import re
import shutil

from fontTools.ttLib import TTFont


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "node_modules/@fontsource-variable/noto-sans-sc"
DEST = ROOT / "public/fonts/aigc-narrow"
CSS = ROOT / "src/styles/aigc-narrow.css"
WIDTH = 0.87


def narrow_font(source: Path, dest: Path) -> None:
    font = TTFont(source)

    def scaled(value: int) -> int:
        return round(value * WIDTH)

    for glyph in font["glyf"].glyphs.values():
        # The source's TrueType hints assume square glyph proportions.
        # Let the browser rasterize the reshaped outlines without those hints.
        if hasattr(glyph, "program"):
            del glyph.program
        for attr in ("xMin", "xMax"):
            if hasattr(glyph, attr):
                setattr(glyph, attr, scaled(getattr(glyph, attr)))
        if glyph.isComposite():
            for component in glyph.components:
                component.x = scaled(component.x)
        elif hasattr(glyph, "coordinates"):
            for index, (x, y) in enumerate(glyph.coordinates):
                glyph.coordinates[index] = scaled(x), y

    for variations in font["gvar"].variations.values():
        for variation in variations:
            for index, point in enumerate(variation.coordinates):
                if point is not None:
                    variation.coordinates[index] = scaled(point[0]), point[1]

    for name, (advance, bearing) in font["hmtx"].metrics.items():
        font["hmtx"].metrics[name] = scaled(advance), scaled(bearing)

    for data in font["HVAR"].table.VarStore.VarData:
        for item in data.Item:
            item[:] = [scaled(delta) for delta in item]

    for attr in ("advanceWidthMax", "minLeftSideBearing", "minRightSideBearing", "xMaxExtent", "caretOffset"):
        setattr(font["hhea"], attr, scaled(getattr(font["hhea"], attr)))
    for attr in ("xMin", "xMax"):
        setattr(font["head"], attr, scaled(getattr(font["head"], attr)))
    for attr in ("xAvgCharWidth", "ySubscriptXSize", "ySubscriptXOffset", "ySuperscriptXSize", "ySuperscriptXOffset"):
        setattr(font["OS/2"], attr, scaled(getattr(font["OS/2"], attr)))

    for record in font["name"].names:
        if record.nameID in (1, 4, 6, 16):
            value = "AIGC Narrow" if record.nameID != 6 else "AIGCNarrow"
            record.string = value.encode(record.getEncoding())

    if "prep" in font:
        del font["prep"]
    font["maxp"].maxSizeOfInstructions = 0
    font.save(dest)


def main() -> None:
    DEST.mkdir(parents=True, exist_ok=True)
    css = (SOURCE / "wght.css").read_text()
    blocks = re.findall(r"@font-face\s*\{[^}]+\}", css)
    output = ["/* Condensed Noto Sans SC derivative, SIL Open Font License 1.1. */"]

    for block in blocks:
        match = re.search(r"noto-sans-sc-(\d+)-wght-normal\.woff2", block)
        if not match:
            continue
        filename = match.group(0)
        narrow_font(SOURCE / "files" / filename, DEST / filename)
        block = block.replace("Noto Sans SC Variable", "AIGC Narrow")
        block = re.sub(
            r"url\(\./files/[^)]+\)",
            f"url('/fonts/aigc-narrow/{filename}')",
            block,
        )
        output.append(block)

    CSS.write_text("\n\n".join(output) + "\n")
    shutil.copyfile(SOURCE / "LICENSE", DEST / "OFL.txt")
    print(f"Wrote {len(output) - 1} font subsets to {DEST}")


if __name__ == "__main__":
    main()
