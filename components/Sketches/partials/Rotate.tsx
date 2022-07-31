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
import { uploadPhoto } from "utils/uploadPhoto";

const RotateSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

const size = 30;
const w = 15;
const defaultLinesPerWindow = 28;

const Rotate: React.FC<SketchProps> = ({
  bg,
  data,
  uuid,
  setLoading,
}: SketchProps) => {
  const groupedData = groupDataByColor(data);
  const linesOfCode = groupedData.length;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(sketchWidth, sketchHeigth, p5.WEBGL).parent(
      canvasParentRef
    );
    p5.background(bg[0], bg[1], bg[2]);

    const graphic = drawContent(p5, 1);
    p5.imageMode(p5.CENTER);
    p5.image(graphic, 0, 0);
  };

  const drawContent = (p5: p5Types, s: number) => {
    const yOffset = p5.height / 2;

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

  const mousePressed = async (
    p5: p5Types,
    e: React.MouseEvent<HTMLElement>
  ) => {
    const target = e.target as Element;

    if (target.id === "add_to_cart") {
      const graphic = drawContent(p5, 0.5);

      uploadPhoto(graphic, `${uuid}_preview`, setLoading);
    }
  };

  return (
    <RotateSketch
      setup={setup} // @ts-ignore: P5 library does not handle event types
      mousePressed={mousePressed}
    />
  );
};

export default Rotate;
