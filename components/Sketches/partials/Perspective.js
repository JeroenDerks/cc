import React from "react";
import dynamic from "next/dynamic";
import { groupDataByColor, isSameColor } from "./../../../utils";

const Perspective = dynamic(
  () => import("react-p5").then((mod) => mod.default),
  { ssr: false }
);
const size = 15;
const w = size;
let groupedData = [];

let camera;

export default ({ data, bg }) => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 533, p5.WEBGL).parent(canvasParentRef);
    camera = p5.createCamera();
    groupedData = groupDataByColor(data);

    drawFrame(p5);
  };

  const drawFrame = (p5) => {
    p5.background(bg[0], bg[1], bg[2]);
    // p5.orbitControl();
    p5.lights();
    p5.noStroke();

    camera.lookAt(p5.width * 0.45, p5.height * 0.55, 0);
    camera.setPosition(100, 0, 350);

    // p5.translate(-p5.width * 0.4, -p5.height * 0.5);

    groupedData?.forEach((line, indexY) => {
      line?.forEach((section) => {
        var col = section.bg;

        if (isSameColor(col, bg) === false) {
          p5.push();

          const _w = w * section.letterCount;
          const _x = section.x * w + _w * 0.5;
          const _y = indexY * size;
          const _h = size - 2;

          p5.fill(col[0], col[1], col[2]);
          p5.translate(_x, _y);
          p5.box(_w, _h, 100);

          p5.pop();
        }
      });
    });
  };

  return <Perspective setup={setup} />;
};
