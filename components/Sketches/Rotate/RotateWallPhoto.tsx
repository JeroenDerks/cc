import React from "react";
import dynamic from "next/dynamic";
import p5Types from "p5";
import Sketch from "react-p5";
import { groupDataByColor } from "utils";
import { sketchWidth, sketchHeigth, wallPhotoDimensions } from "../constants";
import { SketchProps } from "types";
import { drawRotate } from "./drawRotate";
import { uploadPhoto } from "utils/uploadPhoto";

const BasiPillWallPhotoSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

let backgroundImg: p5Types.Image;

const PillWallPhoto: React.FC<SketchProps> = ({
  bg,
  data,
  scale,
  uuid,
}: SketchProps) => {
  const groupedData = groupDataByColor(data);

  const preload = (p5: p5Types) => {
    p5.loadImage("/images/hero-bg-small.jpg", (img) => {
      backgroundImg = img;
    });
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(sketchWidth * scale, sketchHeigth * scale).parent(
      canvasParentRef
    );
    p5.background(bg[0], bg[1], bg[2]);
    p5.noStroke();

    const graphic = drawRotate({ groupedData, bg, p5, s: scale });
    p5.image(backgroundImg, 0, 0, p5.width, p5.height);
    const { x, y, w, h } = wallPhotoDimensions(scale);
    p5.fill(0, 0, 0, 50);
    p5.rect(x + 4, y + 4, w, h, 2);
    p5.rect(x + 2, y + 2, w, h, 2);
    p5.rect(x + 1, y + 1, w, h, 1);
    p5.image(graphic, x, y, w, h);
  };

  const mousePressed = async (
    p5: p5Types,
    e: React.MouseEvent<HTMLElement>
  ) => {
    const target = e.target as Element;

    if (target.id === "add_to_cart") {
      const preview = drawRotate({ groupedData, bg, p5, s: scale });
      uploadPhoto(preview, `${uuid}_preview`);
    }
  };

  return (
    <BasiPillWallPhotoSketch
      setup={setup}
      preload={preload}
      // @ts-ignore: P5 library does not handle event types
      mousePressed={mousePressed}
    />
  );
};

export default PillWallPhoto;
