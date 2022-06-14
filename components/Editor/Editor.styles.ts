import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const LineNo = styled("span")`
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

export const EditorWrapper = styled(Box)(
  ({ bg }: { bg?: string | number }) => ({
    background: bg,
    boxSizing: "border-box",
    caretColor: "grey",
    fontFamily: "monospace",
    minHeight: 533,
    width: "100%",
    maxWidth: 800,
  })
);
