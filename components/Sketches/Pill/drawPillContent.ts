import p5Types from "p5";
import { Color, GroupedColoredDataLine } from "types";
import { isSameColor } from "utils/";

const charH = 15;
const charW = 10;
const padding = 20;
const defaultLinesPerWindow = 34;
const charHOffset = 2;

type DrawContent = {
  groupedData: GroupedColoredDataLine[];
  bg: Color;
  p5: p5Types;
  sx: number;
  sy: number;
};

export const drawPillContent = (props: DrawContent) => {
  const { bg, groupedData, p5, sx, sy } = props;
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

  groupedData?.forEach((line, iY) => {
    for (let i = 0; i < line.length; i++) {
      var col = line[i].bg || bg;
      if (isSameColor(col, bg) === false && !col.includes(-1)) {
        const { x, letterCount } = line[i];

        pg.fill(col[0], col[1], col[2]);

        const bl =
          i === 0 || line[i - 1].char.includes(" ") ? Math.round(8 * sx) : 0;
        const br =
          i === line.length - 1 || line[i + 1].char.includes(" ")
            ? Math.round(8 * sx)
            : 0;

        const _x = (x * charW + padding) * sx;
        const _y = (offsetH + (iY * charH * stretchFactor + padding)) * sy;
        const _w = charW * letterCount * sx;
        const _h = (charH - charHOffset) * stretchFactor * sy;

        pg.rect(_x, _y, _w, _h, bl, br, br, bl);
      }
    }
  });

  return pg;
};
