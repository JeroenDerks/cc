import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { SketchProps } from "types";
import { groupDataByColor, isSameColor } from "../../../utils";
// import { uploadPhoto } from "./../../../utils/upload";
import dynamic from "next/dynamic";

const BasicSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

const size = 15;
const w = 10;
const padding = 10;

const Basic: React.FC<SketchProps> = ({ bg, data, uuid }: SketchProps) => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(800, 533).parent(canvasParentRef);
    p5.background(bg[0], bg[1], bg[2]);
    p5.noStroke();
    p5.frameRate(20);

    drawContent(p5, 1, false, uuid);
  };

  const drawContent = (
    p5: p5Types,
    scale: number,
    save: boolean,
    uuid: string
  ) => {
    const s = scale;
    const pg = p5.createGraphics(p5.width * s, p5.height * s);
    const groupedData = groupDataByColor(data);

    pg.background(bg[0], bg[1], bg[2]);
    pg.noStroke();

    groupedData?.forEach((line, indexY) => {
      for (let i = 0; i < line.length; i++) {
        var col = line[i].bg || bg;
        if (isSameColor(col, bg) === false) {
          const { x, letterCount } = line[i];

          pg.fill(col[0], col[1], col[2]);

          const _x = x * w + padding;
          const _y = indexY * size + padding;
          const _w = w * letterCount;
          const _h = size - 2;

          pg.rect(_x * s, _y * s, _w * s, _h * s);
        }
      }
    });
    if (save) {
      console.log("saving frame with id: ", uuid);
      // uploadPhoto(pg, id);
      p5.saveCanvas(pg, `${uuid}.jpg`);
    } else {
      p5.image(pg, 0, 0, p5.width, p5.height);
    }
  };

  const mousePressed = (p5: p5Types, e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;

    if (target.id === "add_to_cart") {
      drawContent(p5, 2.5, true, uuid);
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
