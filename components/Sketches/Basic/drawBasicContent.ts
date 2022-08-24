import p5Types from "p5";
import { Color, GroupedColoredDataLine } from "types";
import { isSameColor } from "utils/";

const defaultLinesPerWindow = 34;
const padding = 20;
const charH = 15;
const charW = 10;
const charHOffset = 2;

type DrawContent = {
  groupedData: GroupedColoredDataLine[];
  bg: Color;
  p5: p5Types;
  sx: number;
  sy: number;
};

export const drawContent = ({ bg, groupedData, p5, sx, sy }: DrawContent) => {
  const pg = p5.createGraphics(p5.width, p5.height);
  pg.background(bg[0], bg[1], bg[2]);
  pg.noStroke();

  const linesOfCode = groupedData.length;

  const stretchFactor =
    linesOfCode < defaultLinesPerWindow
      ? 1
      : defaultLinesPerWindow / linesOfCode;

  // const offsetH =
  //   linesOfCode < defaultLinesPerWindow
  //     ? p5.height * 0.5 - linesOfCode * charH * 0.5 - padding
  //     : 0;

  const offsetH = 0;

  groupedData?.forEach((line, indexY) => {
    for (let i = 0; i < line.length; i++) {
      var col = line[i].bg || bg;
      if (isSameColor(col, bg) === false && !col.includes(-1)) {
        const { x, letterCount } = line[i];

        pg.fill(col[0], col[1], col[2]);

        const _x = x * charW + padding;
        const _y = indexY * charH * stretchFactor + padding;
        const _w = charW * letterCount;
        const _h = (charH - charHOffset) * stretchFactor;

        pg.rect(_x * sx, offsetH + _y * sy, _w * sx, _h * sy);
      }
    }
  });

  return pg;
};
