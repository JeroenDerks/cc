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

const lineCounter = 0;

const BasicSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

export function convertData(tokens: ThemedToken[][]): ShikiData[][] {
  return tokens.map((line) =>
    line.flatMap((token) =>
      token.content.split("").map((letter) => ({
        content: letter,
        color: hexToRgb(token.color || "#000000") as Color,
      }))
    )
  );
}

const Basic = ({ bg, data }: { bg: any; data: ThemedToken[][] }) => {
  const convertedData = convertData(data);
  console.log(convertedData);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const body = document?.querySelector("body");
    width = body?.clientWidth || width;
    height = body?.clientHeight || height;

    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.background(bg[0], bg[1], bg[2]);
    p5.textFont("monospace");
    p5.textAlign("center");
  };

  const draw = (p5: p5Types) => {
    p5.background(bg[0], bg[1], bg[2]);

    p5.scale(1.7);
    p5.translate(100, -100);
    p5.rotate(0.5);

    for (let i = rows.length - 1; i >= 0; i--) {
      rows[i].isActive && rows[i].draw(p5);
      if (!rows[i].isActive) rows.splice(i, 1);
    }

    if (p5.frameCount % 20 === 1 && rows.length < convertedData.length) {
      const newLine = convertedData[rows.length];
      rows.push(new TokenRow(newLine, 10, 10 + rows.length * charH * 1.5));
    }
  };

  return <BasicSketch setup={setup} draw={draw} />;
};

export default Basic;
