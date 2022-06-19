import React from "react";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";

// import dracula from "prism-react-renderer/themes/dracula";
// import duotoneDark from "prism-react-renderer/themes/duotoneDark";
// import duotoneLight from "prism-react-renderer/themes/duotoneLight";
// import github from "prism-react-renderer/themes/github";
// import nightOwl from "prism-react-renderer/themes/nightOwl";
// import nightOwlLight from "prism-react-renderer/themes/nightOwlLight";
// import oceanicNext from "prism-react-renderer/themes/oceanicNext";
// import okaidia from "prism-react-renderer/themes/okaidia";
// import palenight from "prism-react-renderer/themes/palenight";
// import shadesOfPurple from "prism-react-renderer/themes/shadesOfPurple";
// import synthwave84 from "prism-react-renderer/themes/synthwave84";
// import ultramin from "prism-react-renderer/themes/ultramin";
// import vsDark from "prism-react-renderer/themes/vsDark";
// import vsLight from "prism-react-renderer/themes/vsLight";

import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import duotoneDark from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-dark";
import duotoneLight from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-light";
// import nightOwl from "react-syntax-highlighter/dist/cjs/styles/prism/night-owl";
import materialOcean from "react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic";
import okaidia from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia";
import shadesOfPurple from "react-syntax-highlighter/dist/cjs/styles/prism/shades-of-purple";
import synthwave84 from "react-syntax-highlighter/dist/cjs/styles/prism/synthwave84";
import vscDarkPlus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";

import { SelectChangeEvent } from "@mui/material";
import { EditorTheme } from "types";

export const themeOptions: Array<EditorTheme> = [
  { title: "dracula", theme: dracula, id: 0, bg: "#282a36" },
  { title: "duotoneDark", theme: duotoneDark, id: 1, bg: "#292734" },
  { title: "duotoneLight", theme: duotoneLight, id: 2, bg: "#faf8f4" },
  // { title: "github", theme: github, id: 3 },
  // { title: "nightOwl", theme: nightOwl, id: 3 },
  // { title: "nightOwlLight", theme: nightOwlLight, id: 5 },
  { title: "materialOcean", theme: materialOcean, id: 3, bg: "#282c34" },
  { title: "okaidia", theme: okaidia, id: 4, bg: "#272822" },
  // { title: "palenight", theme: palenight, id: 8 },
  { title: "shadesOfPurple", theme: shadesOfPurple, id: 5, bg: "#2c2a55" },
  { title: "synthwave84", theme: synthwave84, id: 6, bg: "#2b2038" },
  { title: "vscDarkPlus", theme: vscDarkPlus, id: 7, bg: "#1e1e1e" },
];

const ThemeSelector = ({
  setTheme,
  theme,
}: {
  setTheme: (v: EditorTheme) => void;
  theme: EditorTheme;
}) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    const { value } = event.target as HTMLSelectElement;
    setTheme({ ...themeOptions[parseInt(value)] });
  };

  return (
    <FormControl style={{ width: "100%" }}>
      <InputLabel id="theme-label">Theme</InputLabel>
      <Select
        label="Theme"
        onChange={handleChange}
        value={`${theme?.id}` || "1"}
      >
        {themeOptions.map(({ title }, i) => (
          <MenuItem value={i} key={i}>
            {title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ThemeSelector;
