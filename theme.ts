import { createTheme } from "@mui/material/styles";
import { deepPurple, blueGrey, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: deepPurple[500],
    },
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "cursive",
    ].join(","),
    h1: { fontSize: 40, fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontSize: 32, fontWeight: 700 },
    h4: { fontSize: 24, fontWeight: 800 },
    h5: { fontSize: 20, fontWeight: 400 },
    body1: { fontWeight: 300 },
    body2: { fontWeight: 300 },
    subtitle1: {
      color: grey[600],
    },
  },
});

theme.typography.body2 = {
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
};

export const gridP = { xs: 3, sm: 3, md: 4, lg: 10 };
export const border = `1px solid ${theme.palette.divider}`;
export default theme;
