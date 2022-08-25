import { styled, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import { border } from "theme";
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
  ({ bg, theme }: { bg?: string | number; theme: Theme }) => ({
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
    [theme.breakpoints.up("sm")]: { fontSize: 541 },
  })
);
