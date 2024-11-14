import React from "react";
import dynamic from "next/dynamic";
import p5Types from "p5";
import Sketch from "react-p5";
import { hexToRgb } from "../../utils";
import { Color } from "types";
import { ThemedToken } from "shiki";
import { TokenRow } from "./Line";

export type ShikiData = { content: string; color: Color };
export const charW = 8;
export const charH = 16;
export const charHOffset = 4;
let rows: TokenRow[] = [];
let width = 100;
let height = 700;

const BasicSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

const convertData = (data: ThemedToken[][]) => {
  let rows: ShikiData[][] = [];

  data?.forEach((line) => {
    let lines: ShikiData[] = [];

    line.forEach(({ content, color }) => {
      if (color) lines.push({ content, color: hexToRgb(color) });
    });

    rows.push(lines);
  });
  return rows;
};

const Basic = ({ bg, data }: { bg: any; data: ThemedToken[][] }) => {
  const convertedData = convertData(data);
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const body = document?.querySelector("body");
    width = body?.clientWidth || width;
    height = body?.clientHeight || height;

    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.background(bg[0], bg[1], bg[2]);
    p5.textFont("monospace");
    p5.textAlign("center");

    rows.push(new TokenRow(convertedData[1], 100, 100));
  };

  const draw = (p5: p5Types) => {
    p5.background(bg[0], bg[1], bg[2]);

    for (let i = rows.length - 1; i >= 0; i--) {
      rows[i].isActive && rows[i].draw(p5);
      if (!rows[i].isActive) rows.splice(i, 1);
    }

    if (Math.random() < 0.01) {
      const newLine =
        convertedData[Math.floor(Math.random() * convertedData.length)];

      rows.push(
        new TokenRow(newLine, Math.random() * 200, Math.random() * height)
      );
    }
  };

  return <BasicSketch setup={setup} draw={draw} />;
};

export default Basic;
