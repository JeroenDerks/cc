import React from "react";
import dynamic from "next/dynamic";
import p5Types from "p5";
import Sketch from "react-p5";
import { uploadPhoto } from "utils/uploadPhoto";
import { groupDataByColor, isSameColor } from "../../../utils";
import { sketchWidth, sketchHeigth } from "./constants";
import { canvasWidth, canvasHeight, canvasPadding } from "./constants";
import { drawFrame } from "./constants";
import { SketchProps } from "types";

const BasicSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

const padding = 20;
const charH = 15;
const charW = 10;

const Basic: React.FC<SketchProps> = ({
  bg,
  setLoading,
  data,
  uuid,
  loading,
}: SketchProps) => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(sketchWidth, sketchHeigth).parent(canvasParentRef);
    p5.background(bg[0], bg[1], bg[2]);
    p5.noStroke();
    p5.frameRate(20);

    const graphic = drawContent(p5, 1, 1);
    p5.image(graphic, 0, 0);
  };

  const drawContent = (p5: p5Types, sx: number, sy: number) => {
    const pg = p5.createGraphics(p5.width * sx, p5.height * sy);
    const groupedData = groupDataByColor(data);

    pg.background(bg[0], bg[1], bg[2]);
    pg.noStroke();

    groupedData?.forEach((line, indexY) => {
      for (let i = 0; i < line.length; i++) {
        var col = line[i].bg || bg;
        if (isSameColor(col, bg) === false) {
          const { x, letterCount } = line[i];

          pg.fill(col[0], col[1], col[2]);

          const _x = x * charW + padding;
          const _y = indexY * charH + padding;
          const _w = charW * letterCount;
          const _h = charH - 2;

          pg.rect(_x * sx, _y * sy, _w * sx, _h * sy);
        }
      }
    });

    return pg;
  };

  const mousePressed = async (
    p5: p5Types,
    e: React.MouseEvent<HTMLElement>
  ) => {
    const target = e.target as Element;

    if (target.id === "add_to_cart") {
      const scaleX = canvasWidth / p5.width;
      const scaleY = canvasHeight / p5.height;

      const graphic = drawContent(p5, scaleX, scaleY);
      const frame = drawFrame(p5, bg);

      frame.image(
        graphic,
        canvasPadding,
        canvasPadding,
        canvasWidth,
        canvasHeight
      );

      const preview = p5.createGraphics(p5.width * 0.5, p5.height * 0.5);
      preview.image(graphic, 0, 0, preview.width, preview.height);
      // @ts-ignore: P5 library does not handle event types
      await uploadPhoto(preview, `${uuid}_preview`, setLoading);
      // @ts-ignore: P5 library does not handle event types
      await uploadPhoto(frame, `${uuid}_frame`);
    }
  };

  return (
    <BasicSketch
      setup={setup}
      // @ts-ignore: P5 library does not handle event types
      mousePressed={mousePressed}
    />
  );
};

export default Basic;
