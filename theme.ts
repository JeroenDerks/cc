import { createTheme } from "@mui/material/styles";
import { deepPurple, blueGrey, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    // primary: {
    //   main: blueGrey[500],
    // },
    // secondary: {
    //   main: deepPurple[500],
    // },
  },
  typography: {
    subtitle1: {
      color: grey[600],
    },
  },
});

theme.typography.body2 = {
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
};

export default theme;
