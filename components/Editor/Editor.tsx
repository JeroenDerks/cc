import React, { Fragment, useState, useEffect } from "react";
// import EditorLineNumbers from "./EditorLineNumbers";
import { default as InputEditor } from "react-simple-code-editor";
import { EditorWrapper } from "./Editor.styles";
import { EditorTheme, LanguageOption } from "types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

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

  useEffect(() => {
    setUserValue(debouncedUserValue);
  }, [debouncedUserValue]);

  // console.log(theme.theme['code[class*="language-"]']);
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
            padding: 0,
            minHeight: 533,
            marginBottom: -533,
            zIndex: 1,
            position: "relative",
          }}
        >
          {textValue}
        </SyntaxHighlighter>
        <InputEditor
          value={textValue}
          onValueChange={(val) => setTextValue(val)}
          style={{
            minHeight: 533,
            ...theme.theme['code[class*="language-"]'],
            zIndex: 2,
            position: "relative",
            color: "transparent",
            background: "transparent",
            width: "100%",
          }}
          highlight={() => textValue}
        />
      </EditorWrapper>
    </>
  );
};

export default Editor;
