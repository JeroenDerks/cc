import React from "react";
import dynamic from "next/dynamic";
import Sketch from "react-p5";
import p5Types from "p5";
import { Box } from "@mui/material";
import { lineOfExampleCode } from "./animatedDataSource";
import { LineOfCode } from "./AnimatedLineOfCode";

const ClassicSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

const AnimatedBackground = () => {
  const linesOfCode: LineOfCode[] = [];

  const addNewCircle = (p5: p5Types) => {
    const w = window.innerWidth / 2 - Math.random() * window.innerWidth;
    const h = Math.random() * window.innerHeight;
    const index = Math.round(Math.random() * (lineOfExampleCode.length - 1));

    return new LineOfCode(p5, p5.createVector(300, 300), lineOfExampleCode);
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    p5.createCanvas(w, h).parent(canvasParentRef);
    p5.noStroke();
    p5.textFont("Monaco");
    p5.frameRate(30);
    p5.pixelDensity();

    linesOfCode.push(addNewCircle(p5));
  };

  const draw = (p5: p5Types) => {
    p5.background(20);

    // // add new lines
    // if (Math.random() < 0.05) {
    //   linesOfCode.push(addNewCircle(p5));
    // }

    for (let i = linesOfCode.length - 1; i >= 0; i--) {
      linesOfCode[i].display();

      if (linesOfCode[i]._opacity < -1) {
        linesOfCode.splice(i, 1);
        linesOfCode.push(addNewCircle(p5));
      }
    }
  };

  return (
    <Box width={1} height="100vh">
      <ClassicSketch {...{ setup, draw }} />
    </Box>
  );
};

export default AnimatedBackground;
