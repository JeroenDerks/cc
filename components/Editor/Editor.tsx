import React, { useState, useEffect, useReducer, useRef } from "react";
import { EditorWrapper } from "./Editor.styles";
import { LanguageOption } from "types";
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
  userValue,
}: {
  language: LanguageOption;
  setUserValue: (v: string) => void;
  shiki: Highlighter | null;
  userValue: string;
}) => {
  const [textValue, setTextValue] = useState<string>(userValue || "");
  const debouncedUserValue = useDebounce(textValue, 500);
  const editorRef = useRef(null);

  useEffect(() => {
    setUserValue(debouncedUserValue);
  }, [debouncedUserValue]);

  useEffect(() => {
    if (editorRef.current) {
      const editor = document.getElementById("input_editor");
    }
  }, [editorRef]);

  return (
    <EditorWrapper bg={shiki?.getBackgroundColor()}>
      {shiki && (
        <>
          <label htmlFor="input_editor" style={{ display: "none" }}>
            Input editor
          </label>
          <Editor
            value={textValue}
            ref={editorRef}
            textareaId="input_editor"
            onValueChange={(code) => setTextValue(code)}
            highlight={(code) =>
              shiki.codeToHtml(code, { lang: language.code })
            }
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: window?.innerWidth < 800 ? 12 : 14,
              minHeight: window?.innerWidth < 800 ? 200 : 493,
            }}
          />
        </>
      )}
      {!shiki && "Just preparing the palette..."}
    </EditorWrapper>
  );
};

export default InputEditor;
