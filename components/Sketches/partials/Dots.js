import React from "react";
import dynamic from "next/dynamic";
import { groupDataByColor, isSameColor } from "./../../../utils";
import { uploadPhoto } from "./../../../utils/upload";

// Will only import `react-p5` on client-side
const Basic = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});
const size = 15;
const padding = 10;
const w = 10;

let groupedData;

let dragging = false;
let offsetY = 0;
let y = 0;
let h = 0;

export default ({ data, bg }) => {
  const setup = (p5, canvasParentRef) => {
    const _height = data?.length * size - 4 + 2 * padding;
    h = parseInt((40 / 60) * 800);

    p5.createCanvas(800, _height < h ? h : _height).parent(canvasParentRef);
    p5.frameRate(20);
    groupedData = groupDataByColor(data);
  };

  const draw = (p5) => {
    p5.background(bg[0], bg[1], bg[2]);

    groupedData?.forEach((line, iY) => {
      // p5.fill(150, 150, 150, 127);
      // p5.rect(
      //   iY < 10 ? 16 : 10,
      //   iY * size + padding,
      //   iY < 10 ? 10 : 16,
      //   size - 2,
      //   8
      // );

      for (let i = 0; i < line.length; i++) {
        var col = line[i].bg || bg;
        if (isSameColor(col, bg) === false) {
          const { x, letterCount } = line[i];

          p5.fill(col[0], col[1], col[2]);

          const bl = i === 0 || isSameColor(line[i - 1].bg, bg) ? 8 : 0;
          const br =
            i === line.length - 1 || isSameColor(line[i + 1].bg, bg) ? 8 : 0;

          const _x = x * w + padding;
          const _y = iY * size + padding;
          const _w = w * letterCount;
          const _h = size - 2;

          p5.rect(_x, _y, _w, _h, bl, br, br, bl);
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
      const targetWidth = 3543;
      const targetHeight = 2362;

      const scaleX = targetWidth / 800;
      const scaleY = targetHeight / h;

      console.log("sx: ", scaleX, " , sy: ", scaleY);

      const s = (scaleX + scaleY) * 0.5;

      let pg = p5.createGraphics(targetWidth, targetHeight);
      pg.pixelDensity(1);
      pg.background(bg[0], bg[1], bg[2]);
      pg.noStroke();

      groupedData?.forEach((line, iY) => {
        for (let i = 0; i < line.length; i++) {
          var col = line[i].bg || bg;
          if (isSameColor(col, bg) === false) {
            const { x, letterCount } = line[i];

            pg.fill(col[0], col[1], col[2]);

            const bl = i === 0 || isSameColor(line[i - 1].bg, bg) ? 8 * s : 0;
            const br =
              i === line.length - 1 || isSameColor(line[i + 1].bg, bg)
                ? 8 * s
                : 0;

            const _x = (x * w + padding) * s;
            const _y = (iY * size + padding - y) * s;
            const _w = w * letterCount * s;
            const _h = (size - 2) * s;

            if (_y < targetHeight) pg.rect(_x, _y, _w, _h, bl, br, br, bl);
          }
        }
      });

      const margin = 289;

      let exp = p5.createGraphics(
        targetWidth + margin * 2,
        targetHeight + margin * 2
      );

      exp.fill(200);
      exp.rect(0, 0, exp.width, exp.height);
      exp.stroke(150);
      exp.fill(bg[0], bg[1], bg[2], 220);
      exp.rect(0, 0, exp.width, exp.height);
      exp.fill(bg[0], bg[1], bg[2]);
      exp.rect(margin, margin, pg.width - margin, pg.height - margin);
      pg.noStroke();

      exp.image(pg, margin, margin);
      // p5.save(exp, "export_image.png");
      uploadPhoto(exp);
    }
  };

  return (
    <Basic
      setup={setup}
      draw={draw}
      keyPressed={keyPressed}
      mousePressed={mousePressed}
      mouseReleased={mouseReleased}
    />
  );
};
