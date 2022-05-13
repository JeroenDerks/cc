import React from "react";
import dynamic from "next/dynamic";
import { groupDataByColor, isSameColor } from "./../../../utils";

// Will only import `react-p5` on client-side
const Dots = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});
const size = 15;
const w = 10;
const padding = 10;

let groupedData;

let dragging = false;
let offsetY = 0;
let y = 0;
let h = 0;

export default ({ data, bg }) => {
  const setup = (p5, canvasParentRef) => {
    const _height = data?.length * size - 4 + 2 * padding;
    p5.createCanvas(800, 533).parent(canvasParentRef);
    p5.background(bg[0], bg[1], bg[2]);
    p5.noStroke();
    p5.frameRate(20);

    h = parseInt((50 / 70) * 800);
    groupedData = groupDataByColor(data);
  };

  const draw = (p5) => {
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

    update(p5);
    show(p5);
  };

  const update = (p5) => {
    if (dragging) {
      y = p5.mouseY + offsetY;
      if (y < 0) y = 0;
      if (y + h > p5.height) y = p5.height - h;
    }
  };

  const show = (p5) => {
    p5.fill(255, 255, 255, 220);
    p5.rect(0, 0, p5.width, y);
    // middle active section
    if (dragging) {
      p5.stroke(150);
      p5.strokeWeight(2);
    }

    p5.fill(255, 255, 255, 0);
    p5.rect(0, y, p5.width, h);
    // bottom section
    p5.noStroke();
    p5.fill(255, 255, 255, 220);
    p5.rect(0, y + h, p5.width, p5.height - h - y);
  };

  const mousePressed = (p5) => {
    if (p5.mouseY > y && p5.mouseY < y + h) {
      dragging = true;
      offsetY = y - p5.mouseY;
    }
  };

  const mouseReleased = () => {
    dragging = false;
  };

  const keyPressed = (p5, { key }) => {
    if (key === "p" || key === "P") {
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
      p5.saveCanvas(pg, "myCanvas.jpg");
    }
  };

  return (
    <Dots
      setup={setup}
      draw={draw}
      keyPressed={keyPressed}
      mousePressed={mousePressed}
      mouseReleased={mouseReleased}
    />
  );
};
