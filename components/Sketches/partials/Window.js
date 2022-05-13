import React from "react";
import dynamic from "next/dynamic";
import { groupDataByColor, isSameColor } from "./../../../utils";

const Window = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});
const size = 15;
const w = size / 2;
let groupedData = [];

export default ({ data, bg }) => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 533, p5.WEBGL).parent(canvasParentRef);
    groupedData = groupDataByColor(data);
    p5.background(175);
    drawWindow(p5);
  };

  const drawWindow = (p5) => {
    const s = 1;
    const p = 20 * s;
    const pt = 40 * s;

    let frame = p5.createGraphics((p5.width + 100) * s, p5.height * s);

    frame.background(175);
    frame.noStroke();
    frame.fill(bg[0], bg[1], bg[2], 175);
    frame.rect(0, 0, frame.width, frame.height, 4);
    frame.rect(p, pt, frame.width - p * 2, frame.height - pt - p, 4);

    drawContent(p5, s, frame, p, pt);
    drawPreview(p5, s, frame, p, pt);

    p5.angleMode(p5.DEGREES);
    p5.rotateY(15);
    p5.translate(40, 0);
    p5.image(frame, -p5.width * 0.5, -p5.height * 0.5, p5.width, p5.height);
  };

  // Draws the main content of the window
  const drawContent = (p5, s, frame, p, pt) => {
    let cnt = p5.createGraphics(p5.width * s, p5.height * s - pt - pt);
    cnt.noStroke();
    groupedData?.forEach((line, iY) => {
      cnt.fill(150, 150, 150, 127);
      cnt.rect(iY < 10 ? 16 : 10, iY * size, iY < 10 ? 10 : 16, size - 2, 2);

      for (let i = 0; i < line.length; i++) {
        var col = line[i].bg || bg;
        if (isSameColor(col, bg) === false) {
          const { x, letterCount } = line[i];

          cnt.fill(col[0], col[1], col[2]);

          const _x = x * w + size * 3;
          const _y = iY * size;
          const _w = w * letterCount;
          const _h = size - 2;

          cnt.rect(_x, _y, _w, _h);
        }
      }
    });

    frame.image(cnt, p, pt + 10);
  };

  // Draws the small preview on the right side of the window
  const drawPreview = (p5, s, frame, p, pt) => {
    let prev = p5.createGraphics(100 * s, frame.height - pt - p);

    prev.noStroke();
    const previewScale = 0.15;
    groupedData?.forEach((line, iY) => {
      for (let i = 0; i < line.length; i++) {
        var col = line[i].bg || bg;
        if (isSameColor(col, bg) === false) {
          const { x, letterCount } = line[i];

          prev.fill(col[0], col[1], col[2]);

          const _x = (x * w + size * 3) * previewScale;
          const _y = iY * size * previewScale + 10;
          const _w = w * letterCount * previewScale;
          const _h = (size - 2) * previewScale;

          prev.rect(_x, _y, _w, _h);
        }
      }
    });

    frame.image(prev, frame.width - 120 - p, pt);
  };

  return <Window setup={setup} />;
};
