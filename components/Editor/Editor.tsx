import React, { Fragment, useState, useEffect } from "react";
// import EditorLineNumbers from "./EditorLineNumbers";
import { default as InputEditor } from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import { EditorWrapper } from "./Editor.styles";
import { PrismTheme } from "prism-react-renderer";
import { LanguageOption } from "types";

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
  theme: PrismTheme;
  userValue: string;
}) => {
  const [textValue, setTextValue] = useState<string>(userValue || "");
  const { background, backgroundColor } = theme.plain;
  const debouncedUserValue = useDebounce(textValue, 500);

  useEffect(() => {
    setUserValue(debouncedUserValue);
  }, [debouncedUserValue]);

  return (
    <>
      {/* <EditorLineNumbers theme={theme} textValue={textValue} /> */}
      <EditorWrapper bg={background || backgroundColor}>
        <InputEditor
          value={textValue}
          onValueChange={(val) => setTextValue(val)}
          style={{ minHeight: 533 }}
          highlight={(code) => (
            <Highlight
              {...defaultProps}
              theme={theme}
              code={code}
              language={language.code}
            >
              {({ tokens, getLineProps, getTokenProps }) => (
                <Fragment>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })} className="line">
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </Fragment>
              )}
            </Highlight>
          )}
          padding={10}
        />
      </EditorWrapper>
    </>
  );
};

export default Editor;
