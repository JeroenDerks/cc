import React, { useEffect } from "react";

import { convertColorToRGB } from "../../utils";

const HighLighter = ({
  language,
  setKeyCount,
  setRawData,
  theme,
  userValue,
}) => {
  useEffect(() => theme && getRawData(), [theme, userValue, language]);
  const { background, backgroundColor, color } = theme.plain;

  const getIndicesOfEmptyCharacters = (input) => {
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
    const lineData = [];

    const bgColor = convertColorToRGB(background || backgroundColor);

    lines?.forEach(({ childNodes }) => {
      const rowData = [];
      childNodes.forEach(({ style, innerText }) => {
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
    setKeyCount((keyCount) => keyCount + 1);
  };

  return <></>;
};

export default HighLighter;
