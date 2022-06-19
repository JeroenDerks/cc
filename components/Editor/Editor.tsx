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

  return (
    <>
      {/* <EditorLineNumbers theme={theme} textValue={textValue} /> */}
      <EditorWrapper bg={theme.bg}>
        <InputEditor
          value={textValue}
          onValueChange={(val) => setTextValue(val)}
          style={{ minHeight: 533 }}
          highlight={() => (
            <SyntaxHighlighter
              language={language.code}
              style={theme.theme}
              id="prims-syntax"
              useInlineStyles
              wrapLines
              lineProps={{ class: "lineOfCode" }}
            >
              {textValue}
            </SyntaxHighlighter>
          )}
        />
      </EditorWrapper>
    </>
  );
};

export default Editor;
