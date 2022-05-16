import React from "react";
import Sketch from "react-p5";
import dynamic from "next/dynamic";
import p5Types from "p5";
import { groupDataByColor, isSameColor } from "../../../utils";
import { uploadPhoto } from "../../../utils/upload";
import { SketchProps } from "types";

// Will only import `react-p5` on client-side
const Basic = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;
const size = 15;
const padding = 10;
const w = 10;

let y = 0;
let h = 0;

const Dots: React.FC<SketchProps> = ({ bg, data, uuid }: SketchProps) => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const _height = data?.length * size - 4 + 2 * padding;
    h = parseInt((40 / 60) * 800);

    p5.createCanvas(800, _height < h ? h : _height).parent(canvasParentRef);
    p5.frameRate(20);

    drawContent(p5, 1, false, uuid);
  };

  const drawContent = (
    p5: p5Types,
    scale: number,
    save: boolean,
    uuid: string
  ) => {
    p5.background(bg[0], bg[1], bg[2]);
    const groupedData = groupDataByColor(data);
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

  const mousePressed = (p5: p5Types, e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;

    if (target.id === "add_to_cart") {
      drawContent(p5, 2.5, true, uuid);
    }
  };

  return (
    <Basic
      setup={setup}
      // @ts-ignore: P5 library does not handle event types
      mousePressed={mousePressed}
    />
  );
};
