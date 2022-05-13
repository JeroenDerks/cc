import React from "react";
import { LineNo } from "./Editor.styles";
import { PrismTheme } from "prism-react-renderer";

const EditorLineNumbers = ({
  theme,
  textValue,
}: {
  textValue: string;
  theme: PrismTheme;
}) => {
  const { background, backgroundColor } = theme.plain;

  return (
    <div
      style={{
        width: "40px",
        paddingTop: 10,
        background: background || backgroundColor,
      }}
    >
      {new Array(textValue.split(/\r\n|\r|\n/).length)
        .fill("0")
        ?.map((v, i) => (
          <LineNo>{i}</LineNo>
        ))}
    </div>
  );
};

export default EditorLineNumbers;
