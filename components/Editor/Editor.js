import React, { Fragment, useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import { LineNo, styles } from "./Editor.styles";

export function useDebounce(value, delay) {
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

const EditorExample = ({ theme, setUserValue, userValue, language }) => {
  const [textValue, setTextValue] = useState(userValue);
  const { background, backgroundColor } = theme.plain;
  const debouncedUserValue = useDebounce(textValue, 500);

  useEffect(() => {
    setUserValue(debouncedUserValue);
  }, [debouncedUserValue]);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      {/* <div
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
      </div> */}

      <Editor
        value={textValue}
        onValueChange={(val) => setTextValue(val)}
        highlight={(code) => (
          <Highlight
            {...defaultProps}
            theme={theme}
            code={code}
            language={language?.code}
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
        style={{ background: background || backgroundColor, ...styles.root }}
      />
    </div>
  );
};

export default EditorExample;
