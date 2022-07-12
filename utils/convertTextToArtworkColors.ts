import { convertColorToRGB } from "utils";
import { ColoredCharacter } from "types";

export const convertTextToArtworkColors = () => {
  const shikiContainer = document?.querySelector<HTMLElement>(".shiki");
  const linesOfCode = shikiContainer?.querySelectorAll(".line");

  let lines: Array<Array<ColoredCharacter>> = [[]];
  let lineCounter = 0;

  linesOfCode?.forEach((line) => {
    const spans = line.querySelectorAll("span");
    spans?.forEach((span) => {
      const col = window.getComputedStyle(span, null).color;

      for (let i = 0; i < span.innerText.length; i++) {
        const isChar = new RegExp("^\\S+$").test(span?.innerText[i]);
        lines[lineCounter].push({
          char: isChar ? span?.innerText[i] : " ",
          background: isChar ? convertColorToRGB(col) : [-1, -1, -1],
        });
      }
    });

    lines.push([]);
    lineCounter += 1;
  });

  return lines;
};
