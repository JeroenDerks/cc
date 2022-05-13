import { useEffect, useState } from "react";
// export const hasWhiteSpace = (s) => /\s/g.test(s);

// const getColor = ({ char, color, plain }) => {
//   const isEmptyChar = hasWhiteSpace(char);
//   if (isEmptyChar && plain.background) return plain.background;
//   if (isEmptyChar && plain.backgroundColor) return plain.backgroundColor;
//   if (color) return color;
//   return plain.color;
// };

// export const getCharColor = (char, node, plain) => {
//   const color = node?.style?.color;
//   const bg = getColor({ char, color, plain });
//   //   console.log(`"${char}"`, bg);
//   return convertColorToRGB(bg);
// };

export const convertColorToRGB = (col) => {
  if (col.includes("#")) return hexToRgb(col);
  return colorToRgb(col);
};

const hexToRgb = (hex) => {
  var res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return res
    ? [parseInt(res[1], 16), parseInt(res[2], 16), parseInt(res[3], 16)]
    : null;
};

const colorToRgb = (rgb) =>
  rgb
    .substring(4, rgb.length - 1)
    .replace(/ /g, "")
    .split(",")
    .map((v) => parseInt(v));

export const isSameColor = (col1, col2) =>
  col1[0] === col2[0] && col1[1] === col2[1] && col1[2] === col2[2];

export const groupDataByColor = (input) => {
  const lineData = [];
  input.forEach((line) => {
    let matchingArray = [[]];
    let matchingCounter = 0;

    console.log(line);

    for (let i = 0; i < line.length; i++) {
      const bg = line[i].background;
      const char = line[i].char;
      if (i === 0) {
        matchingArray[matchingCounter] = { letterCount: 1, bg, x: i, char };
      } else if (isSameColor(bg, line[i - 1].background)) {
        matchingArray[matchingCounter].letterCount++;
        matchingArray[matchingCounter].char += char;
      } else {
        matchingCounter++;
        matchingArray[matchingCounter] = { letterCount: 1, bg, x: i, char };
      }
    }
    lineData.push(matchingArray);
  });

  return lineData;
};
