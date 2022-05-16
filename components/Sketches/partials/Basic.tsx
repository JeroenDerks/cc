import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";
import { SketchProps } from "types";
import { groupDataByColor, isSameColor } from "../../../utils";
// import { uploadPhoto } from "./../../../utils/upload";
import dynamic from "next/dynamic";

const BasicSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

// Sketch details
const sketchHeigth = 533;
const sketchWidth = 800;
const padding = 20;
const charH = 15;
const charW = 10;

// Specs for printing on 60 x 40 cm canvas at 150 DPI
const DPI = 150;
const canvasPaddingMM = 49; // padding of canvas to account for wrapping of canvas and wooden frame
const canvasWidthMM = 600; // width of printable section of canvas in millimeter
const canvasHeightMM = 400; // height of printable section of canvas in millimeter

const mmPerInch = 25.4; // millimeter per inch
const canvasWidth = Math.round((DPI * canvasWidthMM) / mmPerInch); // required pixels of 600mm canvas width at 150 DPI
const canvasHeight = Math.round((DPI * canvasHeightMM) / mmPerInch); // pixels of 400mm canvas height at 150 DPI
const canvasPadding = Math.round((DPI * canvasPaddingMM) / mmPerInch); // pixels of 49mm canvas padding at 150 DPI

const Basic: React.FC<SketchProps> = ({ bg, data, uuid }: SketchProps) => {
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

  const drawFrame = (p5: p5Types) => {
    let frame = p5.createGraphics(
      canvasWidth + canvasPadding * 2,
      canvasHeight + canvasPadding * 2
    );

    frame.background(200);
    frame.fill(bg[0], bg[1], bg[2], 220);
    frame.rect(0, 0, frame.width, frame.height);

    frame.fill(bg[0], bg[1], bg[2]);
    frame.stroke(150);
    frame.rect(canvasPadding, canvasPadding, canvasWidth, canvasHeight);

    return frame;
  };

  const mousePressed = (p5: p5Types, e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;

    if (target.id === "add_to_cart") {
      const scaleX = canvasWidth / p5.width;
      const scaleY = canvasHeight / p5.height;

      const graphic = drawContent(p5, scaleX, scaleY);
      const frame = drawFrame(p5);

      frame.image(
        graphic,
        canvasPadding,
        canvasPadding,
        canvasWidth,
        canvasHeight
      );

      p5.saveCanvas(frame, `${uuid}.jpg`);
      // uploadPhoto(graphic, id);
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
