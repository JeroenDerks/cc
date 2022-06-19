import React, { useEffect } from "react";
import { convertColorToRGB } from "utils";
import { ColoredDataSet, ColoredRow, EditorTheme, LanguageOption } from "types";
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
  theme: EditorTheme;
  userValue: string;
}) => {
  useEffect(() => theme && getRawData(), [theme, userValue, language]);

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
    const linesOfCode = prism?.querySelectorAll(".lineOfCode");
    const bg = prism?.style.background;

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
            background: convertColorToRGB(isChar ? col : bg),
          });
        }
      });

      lines.push([]);
      lineCounter += 1;
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
