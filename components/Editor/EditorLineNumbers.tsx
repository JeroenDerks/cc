import React from "react";
import { LineNo } from "./Editor.styles";
import { EditorTheme } from "types";

const EditorLineNumbers = ({
  theme,
  textValue,
}: {
  textValue: string;
  theme: EditorTheme;
}) => {
  return (
    <div
      style={{
        width: "40px",
        paddingTop: 10,
        background: theme.bg,
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
