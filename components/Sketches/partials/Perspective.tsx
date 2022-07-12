import React from "react";
import dynamic from "next/dynamic";
import p5Types from "p5";
import Sketch from "react-p5";
// import { uploadPhoto } from "./../../../utils/upload";
import { groupDataByColor, isSameColor } from "../../../utils";
import { sketchWidth, sketchHeigth } from "./constants";
import { canvasWidth, canvasHeight, canvasPadding } from "./constants";
import { drawFrame } from "./constants";
import { SketchProps } from "types";

const PerspectiveSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

const charW = 15;
const charH = charW;

const Perspective: React.FC<SketchProps> = ({
  bg,
  data,
  uuid,
}: SketchProps) => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(sketchWidth, sketchHeigth).parent(canvasParentRef);
    p5.pixelDensity(1);

    const graphic = drawContent(p5, 5, 5);
    p5.image(graphic, 0, 0, p5.width, p5.height);
  };

  const drawContent = (p5: p5Types, sx: number, sy: number) => {
    const pg = p5.createGraphics(p5.width * sx, p5.height * sy, p5.WEBGL);
    pg.background(bg[0], bg[1], bg[2]);

    pg.lights();
    pg.noStroke();

    const camera = pg.createCamera();
    camera.lookAt(pg.width * 0.45, pg.height * 0.55, 0);
    camera.setPosition(
      p5.width * 0.1 * sx,
      p5.height * 0.25,
      p5.width * 0.35 * sx
    );

    const groupedData = groupDataByColor(data);
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

  const mousePressed = (p5: p5Types, e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;

    if (target.id === "add_to_cart") {
      const graphic = drawContent(p5, 5, 5);
      const frame = drawFrame(p5, bg);

      frame.image(
        graphic,
        canvasPadding,
        canvasPadding,
        canvasWidth,
        canvasHeight
      );

      p5.saveCanvas(frame, `perspective_${uuid}.jpg`);
      // uploadPhoto(graphic, id);
    }
  };

  return (
    <PerspectiveSketch
      setup={setup}
      // @ts-ignore: P5 library does not handle event types
      mousePressed={mousePressed}
    />
  );
};

export default Perspective;
