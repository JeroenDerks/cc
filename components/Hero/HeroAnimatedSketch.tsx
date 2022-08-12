import React from "react";
import dynamic from "next/dynamic";
import p5Types from "p5";
import Sketch from "react-p5";
import { groupDataByColor, isSameColor, convertColorToRGB } from "../../utils";
import { Color, SketchProps } from "types";
import type { IThemedToken } from "shiki";

type ShikiData = { content: string; color: Color; offsetX: number };

const BasicSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

const padding = 20;
const charH = 15;
const charW = 7.5;
const defaultLinesPerWindow = 34;
const charHOffset = 2;

const convertData = (data: IThemedToken[][]) => {
  let rows: ShikiData[][] = [];
  data?.forEach((line) => {
    let preceedingCharactersCounter = 0;
    let lines: ShikiData[] = [];
    line.forEach(({ content, color }) => {
      lines.push({
        content,
        color: convertColorToRGB(color),
        offsetX: preceedingCharactersCounter,
      });
      preceedingCharactersCounter += content.length;
    });

    rows.push(lines);
  });
  return rows;
};

const Basic = ({ bg, data }: { bg: any; data: IThemedToken[][] }) => {
  const convertedData = convertData(data);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(
      document?.querySelector("body")?.clientWidth || 100,
      700
    ).parent(canvasParentRef);
    p5.background(bg[0], bg[1], bg[2]);
    p5.frameRate(5);
    p5.textFont("monospace");
  };

  const draw = (p5: p5Types, sx: number = 1, sy: number = 1) => {
    p5.background(bg[0], bg[1], bg[2]);

    convertedData?.forEach((line, indexY) => {
      for (let i = 0; i < line.length; i++) {
        const _x = line[i].offsetX * charW;
        const _y = indexY * charH - charHOffset;
        p5.fill(line[i].color);
        p5.text(line[i].content, _x, _y);
      }
    });
  };

  return <BasicSketch setup={setup} draw={draw} />;
};

export default Basic;
