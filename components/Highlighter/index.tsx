import { useEffect } from "react";
import { convertColorToRGB } from "utils";
import { ColoredDataSet, EditorTheme, LanguageOption } from "types";
import { Color } from "types";

const HighLighter = ({
  keyCount,
  language,
  setKeyCount,
  setRawData,
  theme,
  userValue,
}: {
  keyCount: number;
  language: LanguageOption;
  setKeyCount: (v: number) => void;
  setRawData: (v: ColoredDataSet) => void;
  theme: EditorTheme;
  userValue: string;
}) => {
  useEffect(() => theme && getRawData(), [theme, userValue, language]);

  const getRawData = () => {
    const shikiContainer = document?.querySelector<HTMLElement>(".shiki");
    const linesOfCode = shikiContainer?.querySelectorAll(".line");
    const bg = shikiContainer?.style.background;

    let lines: Array<Array<{ char: string; background: Color }>> = [[]];
    let lineCounter = 0;

    linesOfCode?.forEach((line) => {
      const spans = line.querySelectorAll("span");
      spans?.forEach((span) => {
        const col = window.getComputedStyle(span, null).color;

        for (let i = 0; i < span.innerText.length; i++) {
          const isChar = new RegExp("^\\S+$").test(span?.innerText[i]);
          lines[lineCounter].push({
            char: span?.innerText[i] || " ",
            background: isChar ? convertColorToRGB(col) : [255, 0, 0, 0],
          });
        }
      });

      lines.push([]);
      lineCounter += 1;
    });

    setRawData(lines);
    setKeyCount(keyCount + 1);
  };

  return null;
};

export default HighLighter;
