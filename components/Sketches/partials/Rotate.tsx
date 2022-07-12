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

const RotateSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

const size = 30;
const w = 15;

const Rotate: React.FC<SketchProps> = ({ bg, data, uuid }: SketchProps) => {
  const groupedData = groupDataByColor(data);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(sketchWidth, sketchHeigth, p5.WEBGL).parent(
      canvasParentRef
    );
    p5.background(bg[0], bg[1], bg[2]);
    drawContent(p5);
  };

  const drawContent = (p5: p5Types) => {
    const linesOfCode = groupedData.length;
    const defaultLinesPerWindow = 34;

    const stretchFactor =
      linesOfCode < defaultLinesPerWindow
        ? 1
        : linesOfCode / defaultLinesPerWindow;

    let graphic = p5.createGraphics(
      p5.width * 1.25 * stretchFactor,
      linesOfCode * size
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

          graphic.rect(_x, _y, _w, _h, bl, br, br, bl);
        }
      }
    });

    p5.angleMode(p5.DEGREES);

    const scalar = defaultLinesPerWindow / linesOfCode;
    p5.scale(scalar > 1 ? 1 : scalar);

    p5.rotateZ(45);
    p5.translate(-graphic.width / 2.5, -graphic.height / 2);
    p5.image(graphic, 0, 0);
  };

  return <RotateSketch setup={setup} />;
};

export default Rotate;
