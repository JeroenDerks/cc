import React, { useEffect } from "react";
import { convertColorToRGB } from "utils";
import { ColoredDataSet, ColoredRow, LanguageOption } from "types";
import { PrismTheme } from "prism-react-renderer";
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
  theme: PrismTheme;
  userValue: string;
}) => {
  useEffect(() => theme && getRawData(), [theme, userValue, language]);
  const { background, backgroundColor, color } = theme.plain;

  const getIndicesOfEmptyCharacters = (input: string) => {
    var regex = /\s/g,
      result,
      emptyCharacters = [];
    while ((result = regex.exec(input))) {
      emptyCharacters.push(result.index);
    }
    return emptyCharacters;
  };

  const getRawData = () => {
    const prism = document?.getElementById("prims-syntax");
    const spans = prism?.querySelectorAll("span");
    const bg = prism?.style.background;

    let lines: Array<Array<{ char: string; background: Color }>> = [[]];
    let lineCounter = 0;

    spans?.forEach((span) => {
      console.log(span);

      const col = window.getComputedStyle(span, null).color;

      for (let i = 0; i < span.innerText.length; i++) {
        const isChar = new RegExp("^\\S+$").test(span?.innerText[i]);
        lines[lineCounter].push({
          char: span?.innerText[i] || " ",
          background: convertColorToRGB(isChar ? col : bg),
        });
      }

      if (/\r|\n/.exec(span.innerHTML)) {
        lines.push([{ char: " ", background: convertColorToRGB(bg) }]);
        lineCounter += 1;
      }
    });

    // const lines = document.getElementsByClassName("line");
    // const lineData: ColoredDataSet = [];

    // console.log(lines);
    // const bgColor = convertColorToRGB(background || backgroundColor);

    // lines?.forEach(({ childNodes }) => {
    //   const rowData: ColoredRow = [];
    //   console.warn("define type for child node");
    //   // @ts-ignore: correct types need to be defined
    //   childNodes?.forEach(({ style, innerText }) => {
    //     const emptyCharacters = getIndicesOfEmptyCharacters(innerText);
    //     const nodeColor = convertColorToRGB(style?.color || color);

    //     for (let i = 0; i < innerText.length; i++) {
    //       rowData.push({
    //         char: innerText[i],
    //         background: emptyCharacters.includes(i) ? bgColor : nodeColor,
    //       });
    //     }
    //   });

    //   lineData.push(rowData);
    // });
    console.log(lines);
    setRawData(lines);
    setKeyCount(keyCount + 1);
  };

  return null;
};

export default HighLighter;
