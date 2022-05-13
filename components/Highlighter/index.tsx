import React, { useEffect } from "react";
import { convertColorToRGB } from "utils";
import { ColoredDataSet, ColoredRow, LanguageOption } from "types";
import { PrismTheme } from "prism-react-renderer";

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
    const lines = document?.querySelectorAll(".line");
    const lineData: ColoredDataSet = [];

    const bgColor = convertColorToRGB(background || backgroundColor);

    lines?.forEach(({ childNodes }) => {
      const rowData: ColoredRow = [];
      console.warn("define type for child node");
      // @ts-ignore: correct types need to be defined
      childNodes?.forEach(({ style, innerText }) => {
        const emptyCharacters = getIndicesOfEmptyCharacters(innerText);
        const nodeColor = convertColorToRGB(style?.color || color);

        for (let i = 0; i < innerText.length; i++) {
          rowData.push({
            char: innerText[i],
            background: emptyCharacters.includes(i) ? bgColor : nodeColor,
          });
        }
      });

      lineData.push(rowData);
    });

    setRawData(lineData);
    setKeyCount(keyCount + 1);
  };

  return null;
};

export default HighLighter;
