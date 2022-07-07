import React, { useState, useEffect } from "react";
import { EditorWrapper } from "./Editor.styles";
import { EditorTheme, LanguageOption } from "types";
import Editor from "react-simple-code-editor";
import { Highlighter } from "shiki";

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

const InputEditor = ({
  language,
  setUserValue,
  shiki,
  theme,
  userValue,
}: {
  language: LanguageOption;
  setUserValue: (v: string) => void;
  shiki: Highlighter | null;
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
      <EditorWrapper bg={theme.bg}>
        {shiki && (
          <Editor
            value={textValue}
            onValueChange={(code) => setTextValue(code)}
            highlight={(code) => shiki.codeToHtml(code, language.code)}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
            }}
          />
        )}
        {!shiki && "Loading..."}
      </EditorWrapper>
    </>
  );
};

export default InputEditor;
