import React from "react";
import dynamic from "next/dynamic";
import p5Types from "p5";
import Sketch from "react-p5";
import { groupDataByColor } from "utils";
import { sketchWidth, sketchHeigth } from "../constants";
import { SketchProps } from "types";
import { drawContent } from "./drawBasicContent";

const BasicSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

let backgroundImg: p5Types.Image;
let foregroundImg: p5Types.Image;

const Basic: React.FC<SketchProps> = ({ bg, data, uuid }: SketchProps) => {
  const groupedData = groupDataByColor(data);

  const preload = (p5: p5Types) => {
    p5.loadImage("/images/team-bg.png", (img) => {
      backgroundImg = img;
    });
    p5.loadImage("/images/team-fg.png", (img) => {
      foregroundImg = img;
    });
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(sketchWidth, sketchHeigth).parent(canvasParentRef);
    p5.background(bg[0], bg[1], bg[2]);
    p5.noStroke();
    const graphic = drawContent({ groupedData, bg, p5, sx: 1, sy: 1 });
    p5.image(backgroundImg, 0, 0);
    p5.image(graphic, 100, 100, 400, 266);
    p5.image(foregroundImg, 0, 0);
  };

  return <BasicSketch setup={setup} preload={preload} />;
};

export default Basic;
