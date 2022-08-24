import React from "react";
import dynamic from "next/dynamic";
import p5Types from "p5";
import Sketch from "react-p5";
import { groupDataByColor } from "utils";
import { sketchWidth, sketchHeigth, teamPhotoDimensions } from "../constants";
import { SketchProps } from "types";
import { drawContent } from "./drawBasicContent";

const BasicTeamPhotoSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

let backgroundImg: p5Types.Image;
let foregroundImg: p5Types.Image;

const BasicTeamPhoto: React.FC<SketchProps> = ({
  bg,
  data,
  scale,
}: SketchProps) => {
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
    p5.createCanvas(sketchWidth * scale, sketchHeigth * scale).parent(
      canvasParentRef
    );
    p5.background(bg[0], bg[1], bg[2]);
    p5.noStroke();

    const graphic = drawContent({ groupedData, bg, p5, sx: 1, sy: 1 });
    p5.image(backgroundImg, 0, 0, p5.width, p5.height);
    const { x, y, w, h } = teamPhotoDimensions(scale);
    p5.fill(0, 0, 0, 50);
    p5.rect(x + 3, y + 3, w, h, 2);
    p5.rect(x + 2, y + 2, w, h, 2);
    p5.rect(x + 1, y + 1, w, h, 1);
    p5.image(graphic, x, y, w, h);
    p5.image(foregroundImg, 0, 0, p5.width, p5.height);
  };

  return <BasicTeamPhotoSketch setup={setup} preload={preload} />;
};

export default BasicTeamPhoto;
