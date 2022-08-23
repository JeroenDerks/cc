import React from "react";
import dynamic from "next/dynamic";
import p5Types from "p5";
import Sketch from "react-p5";
import { groupDataByColor } from "utils";
import { sketchWidth, sketchHeigth, teamPhotoDimensions } from "../constants";
import { drawPillContent } from "./drawPillContent";
import { SketchProps } from "types";

const PillSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

let backgroundImg: p5Types.Image;
let foregroundImg: p5Types.Image;

const Pills: React.FC<SketchProps> = ({ bg, data }: SketchProps) => {
  const groupedData = groupDataByColor(data);

  const preload = (p5: p5Types) => {
    p5.loadImage("/images/team-bg.png", (img) => {
      backgroundImg = img;
    });
    p5.loadImage("/images/team-fg-blur.png", (img) => {
      foregroundImg = img;
    });
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(sketchWidth, sketchHeigth).parent(canvasParentRef);

    const graphic = drawPillContent({ bg, groupedData, p5, sx: 1, sy: 1 });
    p5.image(backgroundImg, 0, 0);
    const { x, y, w, h } = teamPhotoDimensions;
    p5.fill(0, 0, 0, 50);
    p5.rect(x + 3, y + 3, w, h, 2);
    p5.rect(x + 2, y + 2, w, h, 2);
    p5.rect(x + 1, y + 1, w, h, 1);
    p5.image(graphic, x, y, w, h);
    p5.image(foregroundImg, 0, 0);
  };

  return <PillSketch setup={setup} preload={preload} />;
};

export default Pills;
