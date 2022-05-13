import styled from "styled-components";

export const LineNo = styled.span`
  display: block;
  width: 50px;
  user-select: none;
  color: grey;
  text-align: right;
  padding-right: 20px;
  font-size: 15px;
  font-family: monospace;
  line-height: 1;
  opacity: 0.5;
`;

export const Pre = styled.pre`
  /* text-align: left;
  margin: -1em 0;
  padding: 0.5em;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  } */
`;
export const styles = {
  root: {
    boxSizing: "border-box",
    caretColor: "grey",
    fontFamily: "monospace",
    minHeight: 533,
    width: "100%",
    maxWidth: 800,
  },
};
