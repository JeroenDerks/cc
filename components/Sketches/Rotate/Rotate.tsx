import React from "react";
import dynamic from "next/dynamic";
import p5Types from "p5";
import Sketch from "react-p5";
import { groupDataByColor, isSameColor } from "utils";
import { sketchWidth, sketchHeigth } from "../constants";
import { SketchProps } from "types";
import { uploadPhoto } from "utils/uploadPhoto";
import { drawRotate } from "./drawRotate";

const RotateSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

const Rotate: React.FC<SketchProps> = ({
  bg,
  data,
  uuid,
  scale,
}: SketchProps) => {
  const groupedData = groupDataByColor(data);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    if (!canvasParentRef) return;
    p5.createCanvas(sketchWidth * scale, sketchHeigth * scale, p5.WEBGL).parent(
      canvasParentRef
    );
    p5.background(bg[0], bg[1], bg[2]);

    const graphic = drawRotate({ bg, groupedData, p5, s: scale });
    p5.imageMode(p5.CENTER);
    p5.image(graphic, 0, 0);
  };

  const mousePressed = async (
    p5: p5Types,
    e: React.MouseEvent<HTMLElement>
  ) => {
    const target = e.target as Element;

    if (target.id === "add_to_cart") {
      const graphic = drawRotate({ bg, groupedData, p5, s: 0.5 });

      uploadPhoto(graphic, `${uuid}_preview`);
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
