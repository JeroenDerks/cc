import { ColoredDataSet, GroupedColoredDataLine, Color } from "types";

const defaultColor: Color = [155, 155, 155];

// checks if input matches expected Color pattern
const isValidColor = (input: any): boolean => {
  if (
    input?.length === 3 &&
    typeof input[0] === "number" &&
    typeof input[1] === "number" &&
    typeof input[2] === "number"
  )
    return true;
  else return false;
};

export const convertColorToRGB = (col: string | number | void): Color => {
  if (typeof col === "string") {
    if (col.includes("#")) {
      return hexToRgb(col);
    } else {
      return colorToRgb(col);
    }
  }
  return defaultColor;
};

const hexToRgb = (hex: string): Color => {
  const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (res) {
    const col = [
      parseInt(res[1], 16),
      parseInt(res[2], 16),
      parseInt(res[3], 16),
    ];
    if (isValidColor(col)) return col as Color;
    else return defaultColor;
  }
  return defaultColor;
};

const colorToRgb = (col: string): Color => {
  const rgb = col.match(/\d+/g)?.map(Number);
  if (isValidColor(rgb)) {
    return rgb as Color;
  } else {
    return defaultColor;
  }
};
export const isSameColor = (col1: Color, col2: Color) =>
  col1[0] === col2[0] && col1[1] === col2[1] && col1[2] === col2[2];

export const groupDataByColor = (input: ColoredDataSet) => {
  const lineData: Array<GroupedColoredDataLine> = [[]];

  input.forEach((line) => {
    let matchingArray: GroupedColoredDataLine = [];
    let matchingCounter = 0;

    for (let i = 0; i < line.length; i++) {
      const bg = line[i].background;
      const char = line[i].char;
      const newColorSet = { letterCount: 1, bg, x: i, char };
      if (i === 0) {
        matchingArray[matchingCounter] = newColorSet;
      } else if (isSameColor(line[i].background, line[i - 1].background)) {
        matchingArray[matchingCounter].letterCount++;
        matchingArray[matchingCounter].char += char;
      } else {
        matchingCounter++;
        matchingArray[matchingCounter] = newColorSet;
      }
    }

    lineData.push(matchingArray);
  });
  return lineData;
};
