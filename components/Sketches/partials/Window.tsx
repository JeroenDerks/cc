import React from "react";
import dynamic from "next/dynamic";
import p5Types from "p5";
import Sketch from "react-p5";
// import { uploadPhoto } from "./../../../utils/upload";
import { groupDataByColor, isSameColor } from "../../../utils";
import { sketchWidth, sketchHeigth } from "./constants";
import { canvasWidth, canvasHeight, canvasPadding } from "./constants";
import { drawFrame } from "./constants";
import { SketchProps } from "types";

const WindowSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

const size = 15;
const w = size / 2;
const p = 20;

const Window: React.FC<SketchProps> = ({ bg, data, uuid }: SketchProps) => {
  const groupedData = groupDataByColor(data);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(sketchWidth, sketchHeigth, p5.WEBGL).parent(
      canvasParentRef
    );

    p5.createCanvas(800, 533, p5.WEBGL).parent(canvasParentRef);
    p5.background(175);
    draw(p5, 2, 2);
  };

  const draw = (p5: p5Types, sx: number, sy: number) => {
    const VSCodeWindow = drawVSCodeWindow(p5, sx, sy);
    const VSCodePreview = drawPreview(p5, VSCodeWindow, sx, sy);
    const content = drawContent(p5, sx, sy);

    VSCodeWindow.image(content, p, p + 10);
    VSCodeWindow.image(
      VSCodePreview,
      VSCodeWindow.width - VSCodePreview.width - p * sx,
      p * sy
    );

    p5.angleMode(p5.DEGREES);
    p5.rotateY(15);
    p5.translate(40, 0);
    p5.image(
      VSCodeWindow,
      -p5.width * 0.5,
      -p5.height * 0.5,
      p5.width,
      p5.height
    );
  };

  const drawVSCodeWindow = (p5: p5Types, sx: number, sy: number) => {
    let frame = p5.createGraphics((p5.width + 100) * sx, p5.height * sy);

    frame.background(175);
    frame.noStroke();
    frame.fill(bg[0], bg[1], bg[2], 175);
    frame.rect(0, 0, frame.width, frame.height, 4);
    frame.rect(
      p * sx,
      p * sy,
      (frame.width - p * 2) * sx,
      (frame.height - p * 2) * sy,
      4 * sx
    );

    return frame;
  };

  // Draws the main content of the window
  const drawContent = (p5: p5Types, sx: number, sy: number) => {
    let cnt = p5.createGraphics(p5.width * sx, (p5.height - p * 2) * sy);
    cnt.noStroke();

    groupedData?.forEach((line, iY) => {
      cnt.fill(150, 150, 150, 127);
      cnt.rect(
        iY < 10 ? 16 * sx : 10 * sx,
        iY * size * sy,
        iY < 10 ? 10 * sx : 16 * sx,
        (size - 2) * sy,
        2 * sx
      );

      for (let i = 0; i < line.length; i++) {
        var col = line[i].bg || bg;
        if (isSameColor(col, bg) === false && col[3] !== 0) {
          const { x, letterCount } = line[i];

          cnt.fill(col[0], col[1], col[2]);

          const _x = x * w + size * 3;
          const _y = iY * size;
          const _w = w * letterCount;
          const _h = size - 2;

          cnt.rect(_x * sx, _y * sy, _w * sx, _h * sy);
        }
      }
    });
    return cnt;
  };

  // Draws the small preview on the right side of the window
  const drawPreview = (
    p5: p5Types,
    frame: p5Types.Graphics,
    sx: number,
    sy: number
  ) => {
    let prev = p5.createGraphics(100 * sx, (frame.height - p * 2) * sy);

    prev.noStroke();
    const previewScale = 0.15;
    groupedData?.forEach((line, iY) => {
      for (let i = 0; i < line.length; i++) {
        var col = line[i].bg || bg;
        if (isSameColor(col, bg) === false && col[3] != 0) {
          const { x, letterCount } = line[i];

          prev.fill(col[0], col[1], col[2]);

          const _x = (x * w + size * 3) * previewScale;
          const _y = iY * size * previewScale + 10;
          const _w = w * letterCount * previewScale;
          const _h = (size - 2) * previewScale;

          prev.rect(_x * sx, _y * sy, _w * sx, _h * sy);
        }
      }
    });

    return prev;
  };

  const mousePressed = (p5: p5Types, e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;

    if (target.id === "add_to_cart") {
      const scaleX = canvasWidth / p5.width;
      const scaleY = canvasHeight / p5.height;

      const VSCodeWindow = drawVSCodeWindow(p5, scaleX, scaleY);
      const VSCodePreview = drawPreview(p5, VSCodeWindow, scaleX, scaleY);
      const content = drawContent(p5, scaleX, scaleY);

      VSCodeWindow.image(content, p, p + 10);
      VSCodeWindow.image(
        VSCodePreview,
        (VSCodeWindow.width - 120 - p) * scaleX,
        p * scaleY
      );

      // p5.angleMode(p5.DEGREES);
      // p5.rotateY(15);
      // p5.translate(40, 0);
      p5.image(
        VSCodeWindow,
        -p5.width * 0.5,
        -p5.height * 0.5,
        p5.width,
        p5.height
      );
      p5.saveCanvas(`window_${uuid}.jpg`);
      // uploadPhoto(graphic, id);
    }
  };

  return (
    <WindowSketch
      setup={setup}
      // @ts-ignore: P5 library does not handle event types
      mousePressed={mousePressed}
    />
  );
};

export default Window;
