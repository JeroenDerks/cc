import React from "react";
import dynamic from "next/dynamic";
import p5Types from "p5";
import Sketch from "react-p5";
import { groupDataByColor } from "utils";
import { sketchWidth, sketchHeigth } from "../constants";
import { canvasWidth, canvasHeight } from "../constants";
import { drawPillContent } from "./drawPillContent";
import { SketchProps } from "types";
import { uploadPhoto } from "utils/uploadPhoto";

const PillSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

const Pills: React.FC<SketchProps> = ({
  bg,
  data,
  uuid,
  scale,
}: SketchProps) => {
  const groupedData = groupDataByColor(data);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(sketchWidth * scale, sketchHeigth * scale).parent(
      canvasParentRef
    );
    p5.background(bg[0], bg[1], bg[2]);
    const graphic = drawPillContent({
      bg,
      groupedData,
      p5,
      sx: 1,
      sy: 1,
    });
    p5.image(graphic, 0, 0);
  };

  const mousePressed = (p5: p5Types, e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;

    if (target.id === "add_to_cart") {
      const sx = canvasWidth / p5.width;
      const sy = canvasHeight / p5.height;

      const graphic = drawPillContent({ bg, groupedData, p5, sx, sy });

      const preview = p5.createGraphics(p5.width * 0.5, p5.height * 0.5);
      preview.image(graphic, 0, 0, preview.width, preview.height);
      uploadPhoto(preview, `${uuid}_preview`);
    }
  };

  return (
    <PillSketch
      setup={setup}
      // @ts-ignore: P5 library does not handle event types
      mousePressed={mousePressed}
    />
  );
};

export default Pills;
