import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import theme, { border } from "theme";

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
    border: border,
    boxSizing: "border-box",
    caretColor: "grey",
    fontFamily: "monospace",
    position: "relative",
    width: "100%",
    padding: 16,
    maxWidth: 800,
    borderRadius: 4,

    [theme.breakpoints.down("sm")]: { minHeight: 300 },
    [theme.breakpoints.up("sm")]: { minHeight: 541 },
  })
);
