import p5Types from "p5";
import { Color, GroupedColoredDataLine } from "types";
import { isSameColor } from "utils/";

const charW = 15;
const charH = charW;

type DrawContent = {
  groupedData: GroupedColoredDataLine[];
  bg: Color;
  p5: p5Types;
  sx: number;
  sy: number;
};

export const drawPerspective = (props: DrawContent) => {
  const { bg, groupedData, p5, sx, sy } = props;
  const pg = p5.createGraphics(p5.width * sx, p5.height * sy, p5.WEBGL);
  pg.background(bg[0], bg[1], bg[2]);

  pg.lights();
  pg.noStroke();

  const camera = pg.createCamera();
  camera.lookAt(pg.width * 0.45, pg.height * 0.55, 0);
  camera.setPosition(
    p5.width * 0.1 * sx,
    p5.height * 0.05 * sy,
    p5.width * 0.35 * sx
  );

  groupedData?.forEach((line, indexY) => {
    line?.forEach((section) => {
      var col = section.bg;

      if (isSameColor(col, bg) === false && !col.includes(-1)) {
        pg.push();

        const _w = charH * section.letterCount;
        const _x = section.x * charH + _w * 0.5;
        const _y = indexY * charW;
        const _h = charW - 2;

        pg.fill(col[0], col[1], col[2]);
        pg.translate(_x * sx, _y * sy);
        pg.box(_w * sx, _h * sy, 100 * sx);

        pg.pop();
      }
    });
  });
  return pg;
};
