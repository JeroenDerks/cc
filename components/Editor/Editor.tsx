import React, { useRef, useState, useEffect } from "react";
// import EditorLineNumbers from "./EditorLineNumbers";
import { default as InputEditor } from "react-simple-code-editor";
import { EditorWrapper } from "./Editor.styles";
import { EditorTheme, LanguageOption } from "types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Box from "@mui/material/Box";
const shiki = require("shiki");

export function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const Editor = ({
  language,
  setUserValue,
  theme,
  userValue,
}: {
  language: LanguageOption;
  setUserValue: (v: string) => void;
  theme: EditorTheme;
  userValue: string;
}) => {
  const [textValue, setTextValue] = useState<string>(userValue || "");
  const debouncedUserValue = useDebounce(textValue, 500);
  const [offsetHeight, setOffsetHeight] = useState<number>(-533);
  const ref = useRef();

  useEffect(() => {
    setUserValue(debouncedUserValue);
  }, [debouncedUserValue]);

  // console.log(theme.theme['code[class*="language-"]']);

  shiki
    .getHighlighter({
      theme: "nord",
    })
    .then((highlighter) =>
      highlighter.codeToHtml(`console.log('shiki');`, "javascript")
    );

  return (
    <>
      {/* <EditorLineNumbers theme={theme} textValue={textValue} /> */}
      <EditorWrapper bg={theme.bg}>
        <SyntaxHighlighter
          language={language.code}
          style={theme.theme}
          id="prims-syntax"
          useInlineStyles
          wrapLines
          lineProps={{ class: "lineOfCode" }}
          customStyle={{
            margin: 0,
            minHeight: 533,
            height: "100%",
            zIndex: 1,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {textValue}
        </SyntaxHighlighter>
        <Box
          ref={ref}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            border: "1px solid red",
          }}
        >
          <InputEditor
            value={textValue}
            onClick={() => console.log("inout editor clicked")}
            onValueChange={(val) => setTextValue(val)}
            style={{
              minHeight: 533,
              ...theme.theme['code[class*="language-"]'],
              border: "1px solid green",
              zIndex: 2,
              height: "100%",
              pointerEvents: "all",
              position: "absolute",
              top: 0,
              left: 0,
              resize: "none",
              // color: "transparent",
              // background: "transparent",
              width: "100%",
            }}
            highlight={() => textValue}
            padding={16}
          />
        </Box>
      </EditorWrapper>
    </>
  );
};

export default Editor;
