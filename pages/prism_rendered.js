import React, { useState } from "react";
import styled from "styled-components";
import Highlight, { defaultProps as p } from "prism-react-renderer";
import ThemeSelector, { themeOptions } from "../components/ThemeSelector";

const size = 16;
const w = size / 2;

const Div = styled.div`
  display: flex;
  width: ${({ l }) => l * w + "px"};
  background-color: ${({ bg }) => bg};
  height: ${size}px;
  margin: 2px 0;
`;

const PrismRendered = () => {
  const [userValue, setUserValue] = useState(
    `
    import React, { useState } from "react";
    `
  );

  const [theme, setTheme] = useState(themeOptions[2].theme);

  const hasWhiteSpace = (s) => /\s/g.test(s);
  // test comment
  const hasCharacters = (s) => /[a-zA-Z]+/.test(s);

  const setTokenStyling = (token, line) => {
    console.log(token);

    if (!token.style?.color || hasWhiteSpace(token.children)) {
      if (token.children === " ") {
        return <Div l={1} />;
      } else {
        const split = token.children.split(" ");

        return split.map((option) => (
          <Div
            bg={hasCharacters(option) && line.style.color}
            l={hasCharacters(option) ? option.length : 1}
          />
        ));
      }
    }

    return <Div bg={token?.style?.color} l={token.children?.length} />;
  };
  return (
    <div style={{ padding: 40 }}>
      <textarea
        value={userValue}
        onChange={(e) => setUserValue(e.target.value)}
        rows={20}
        cols={100}
      ></textarea>
      <ThemeSelector setTheme={setTheme} theme={theme} />

      {userValue && (
        <div>
          <Highlight {...p} theme={theme} code={userValue} language="jsx">
            {({ tokens, getLineProps, getTokenProps }) => (
              <pre>
                <div style={{ background: theme?.plain?.backgroundColor }}>
                  {tokens.map((line, i) => (
                    <div
                      {...getLineProps({ line, key: i })}
                      style={{ display: "flex" }}
                    >
                      {line.map((token, key) =>
                        setTokenStyling(
                          getTokenProps({ token, key }),
                          getLineProps({ line, key: i })
                        )
                      )}
                    </div>
                  ))}
                </div>
              </pre>
            )}
          </Highlight>

          <Highlight {...p} theme={theme} code={userValue} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })}></span>
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default PrismRendered;
