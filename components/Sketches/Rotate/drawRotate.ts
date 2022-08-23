import p5Types from "p5";
import { Color, GroupedColoredDataLine } from "types";
import { isSameColor } from "utils/";

const size = 30;
const w = 15;
const defaultLinesPerWindow = 28;

type DrawContent = {
  groupedData: GroupedColoredDataLine[];
  bg: Color;
  p5: p5Types;
  s: number;
};

export const drawRotate = (props: DrawContent) => {
  const { bg, groupedData, p5, s } = props;
  const yOffset = p5.height / 2;

  const linesOfCode = groupedData.length;

  const stretchFactor =
    linesOfCode < defaultLinesPerWindow
      ? 1
      : linesOfCode / defaultLinesPerWindow;

  let graphic = p5.createGraphics(
    p5.width * 1.25 * stretchFactor,
    linesOfCode * size + yOffset
  );

  graphic.background(bg[0], bg[1], bg[2]);
  graphic.noStroke();

  groupedData?.forEach((line, iY) => {
    for (let i = 0; i < line.length; i++) {
      var col = line[i].bg || bg;
      if (isSameColor(col, bg) === false && !col.includes(-1)) {
        const { x, letterCount } = line[i];

        graphic.fill(col[0], col[1], col[2]);

        const bl = i === 0 || line[i - 1].char.includes(" ") ? 6 : 0;
        const br =
          i === line.length - 1 || line[i + 1].char.includes(" ") ? 6 : 0;

        const _x = x * w * stretchFactor;
        const _y = iY * size;
        const _w = w * letterCount * stretchFactor;
        const _h = size - 4;

        graphic.rect(_x, _y + yOffset, _w, _h, bl, br, br, bl);
      }
    }
  });

  const preview = p5.createGraphics(p5.width * s, p5.height * s, p5.WEBGL);

  preview.background(bg[0], bg[1], bg[2]);

  preview.push();
  const scalar = defaultLinesPerWindow / linesOfCode;
  preview.scale(scalar > 1 ? s : scalar * s);

  preview.rotateZ(p5.radians(45));
  preview.translate(-graphic.width / 2.5, -graphic.height / 2);
  preview.image(graphic, 0, 0);
  preview.pop();

  return preview;
};
