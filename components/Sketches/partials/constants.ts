import p5Types from "p5";

// Sketch details
export const sketchHeigth = 533;
export const sketchWidth = 800;

// Specs for printing on 60 x 40 cm canvas at 150 DPI
const DPI = 100;
const canvasPaddingMM = 49; // padding of canvas to account for wrapping of canvas and wooden frame
const canvasWidthMM = 600; // width of printable section of canvas in millimeter
const canvasHeightMM = 400; // height of printable section of canvas in millimeter
const mmPerInch = 25.4; // millimeter per inch

export const canvasWidth = Math.round((DPI * canvasWidthMM) / mmPerInch); // required pixels of 600mm canvas width at 150 DPI
export const canvasHeight = Math.round((DPI * canvasHeightMM) / mmPerInch); // pixels of 400mm canvas height at 150 DPI
export const canvasPadding = Math.round((DPI * canvasPaddingMM) / mmPerInch); // pixels of 49mm canvas padding at 150 DPI

// handle the drawing of the padding for the canvas.
export const drawFrame = (p5: p5Types, bg: [number, number, number]) => {
  let frame = p5.createGraphics(
    canvasWidth + canvasPadding * 2,
    canvasHeight + canvasPadding * 2
  );

  frame.background(200);
  frame.fill(bg[0], bg[1], bg[2], 220);
  frame.rect(0, 0, frame.width, frame.height);

  frame.fill(bg[0], bg[1], bg[2]);
  frame.stroke(150);
  frame.rect(canvasPadding, canvasPadding, canvasWidth, canvasHeight);

  return frame;
};
