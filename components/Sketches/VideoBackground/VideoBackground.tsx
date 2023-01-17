import React from "react";
import dynamic from "next/dynamic";
import Sketch from "react-p5";
import p5Types from "p5";
import { Box } from "@mui/material";
import { lineOfExampleCode } from "./videoDataSource";
import { LineOfCode } from "./AnimatedLineOfCode";

const ClassicSketch = dynamic(
  () => import("react-p5").then((mod) => mod.default as typeof Sketch),
  { ssr: false }
) as typeof Sketch;

const VideoBackground = () => {
  let circle = React.useRef<LineOfCode>();

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const index = Math.round(Math.random() * (lineOfExampleCode.length - 1));

    p5.createCanvas(w, h).parent(canvasParentRef);
    circle.current = new LineOfCode(
      p5,
      p5.createVector(300, 100),
      lineOfExampleCode[index]
    );

    p5.background(20);
    p5.noStroke();
    p5.textFont("Monaco");
    p5.frameRate(30);
  };

  const draw = (p5: p5Types) => {
    p5.background(20);

    if (circle.current) {
      circle.current.display();
    }
    if (circle.current?._opacity && circle.current?._opacity < -1) {
      const w = Math.random() * (window.innerWidth / 2);
      const h = Math.random() * window.innerHeight;

      const index = Math.round(Math.random() * (lineOfExampleCode.length - 1));

      circle.current = new LineOfCode(
        p5,
        p5.createVector(w, h),
        lineOfExampleCode[index]
      );
    }
  };

  return (
    <Box width={1} height="100vh">
      <ClassicSketch {...{ setup, draw }} />
    </Box>
  );
};

export default VideoBackground;
