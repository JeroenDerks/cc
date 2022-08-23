import React from "react";
import dynamic from "next/dynamic";
import p5Types from "p5";
import Sketch from "react-p5";
import { groupDataByColor } from "utils";
import { sketchWidth, sketchHeigth } from "../constants";
import { drawPerspective } from "./drawPerspective";
import { SketchProps } from "types";
import { uploadPhoto } from "utils/uploadPhoto";

const PerspectiveSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

const Perspective: React.FC<SketchProps> = ({
  bg,
  data,
  uuid,
}: SketchProps) => {
  const groupedData = groupDataByColor(data);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(sketchWidth, sketchHeigth).parent(canvasParentRef);
    p5.pixelDensity(1);

    const graphic = drawPerspective({ bg, groupedData, p5, sx: 1, sy: 1 });
    p5.image(graphic, 0, 0, p5.width, p5.height);
  };

  const mousePressed = (p5: p5Types, e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;

    if (target.id === "add_to_cart") {
      const graphic = drawPerspective({ bg, groupedData, p5, sx: 1, sy: 1 });
      const preview = p5.createGraphics(p5.width * 0.5, p5.height * 0.5);
      preview.image(graphic, 0, 0, preview.width, preview.height);
      uploadPhoto(preview, `${uuid}_preview`);
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
