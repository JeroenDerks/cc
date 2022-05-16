import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { GroupedColoredDataLine, SketchProps } from "types";
import { groupDataByColor, isSameColor } from "../../../utils";
import { uploadPhoto } from "./../../../utils/upload";
import dynamic from "next/dynamic";

const BasicSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

const size = 15;
const w = 10;
const padding = 10;

let groupedData: Array<GroupedColoredDataLine> = [[]];

let y = 0;
let h = 0;

const Basic: React.FC<SketchProps> = ({ bg, data, saveImage }: SketchProps) => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(800, 533).parent(canvasParentRef);
    p5.background(bg[0], bg[1], bg[2]);
    p5.noStroke();
    p5.frameRate(20);

    h = Math.round((50 / 70) * 800);
    groupedData = groupDataByColor(data);

    drawContent(p5);
    if (saveImage) {
      saveGraphic(p5);
    }
  };

  const drawContent = (p5: p5Types) => {
    p5.background(bg[0], bg[1], bg[2]);

    groupedData?.forEach((line, indexY) => {
      for (let i = 0; i < line.length; i++) {
        var col = line[i].bg || bg;
        if (isSameColor(col, bg) === false) {
          const { x, letterCount } = line[i];

          p5.fill(col[0], col[1], col[2]);

          const _x = x * w + padding;
          const _y = indexY * size + padding;
          const _w = w * letterCount;
          const _h = size - 2;

          p5.rect(_x, _y, _w, _h);
        }
      }
    });
  };

  const saveGraphic = (p5: p5Types) => {
    const s = 2.5;

    let pg = p5.createGraphics(p5.width * s, h * s);
    pg.background(bg[0], bg[1], bg[2]);

    pg.noStroke();

    groupedData?.forEach((line, indexY) => {
      for (let i = 0; i < line.length; i++) {
        var col = line[i].bg || bg;
        if (isSameColor(col, bg) === false) {
          const { x, letterCount } = line[i];

          pg.fill(col[0], col[1], col[2]);

          const _x = x * w + padding;
          const _y = indexY * size + padding - y;
          const _w = w * letterCount;
          const _h = size - 2;

          pg.rect(_x * s, _y * s, _w * s, _h * s);
        }
      }
    });
    // uploadPhoto(pg);
    p5.saveCanvas(pg, "myCanvas.jpg");
  };

  return <BasicSketch setup={setup} />;
};

export default Basic;
