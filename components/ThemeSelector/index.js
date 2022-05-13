import React from "react";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";

import dracula from "prism-react-renderer/themes/dracula";
import duotoneDark from "prism-react-renderer/themes/duotoneDark";
import duotoneLight from "prism-react-renderer/themes/duotoneLight";
import github from "prism-react-renderer/themes/github";
import nightOwl from "prism-react-renderer/themes/nightOwl";
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight";
import oceanicNext from "prism-react-renderer/themes/oceanicNext";
import okaidia from "prism-react-renderer/themes/okaidia";
import palenight from "prism-react-renderer/themes/palenight";
import shadesOfPurple from "prism-react-renderer/themes/shadesOfPurple";
import synthwave84 from "prism-react-renderer/themes/synthwave84";
import ultramin from "prism-react-renderer/themes/ultramin";
import vsDark from "prism-react-renderer/themes/vsDark";
import vsLight from "prism-react-renderer/themes/vsLight";

export const themeOptions = [
  { title: "dracula", theme: dracula, id: 0 },
  { title: "duotoneDark", theme: duotoneDark, id: 1 },
  { title: "duotoneLight", theme: duotoneLight, id: 2 },
  { title: "github", theme: github, id: 3 },
  { title: "nightOwl", theme: nightOwl, id: 4 },
  { title: "nightOwlLight", theme: nightOwlLight, id: 5 },
  { title: "oceanicNext", theme: oceanicNext, id: 6 },
  { title: "okaidia", theme: okaidia, id: 7 },
  { title: "palenight", theme: palenight, id: 8 },
  { title: "shadesOfPurple", theme: shadesOfPurple, id: 9 },
  { title: "synthwave84", theme: synthwave84, id: 10 },
  { title: "ultramin", theme: ultramin, id: 11 },
  { title: "vsDark", theme: vsDark, id: 12 },
  { title: "vsLight", theme: vsLight, id: 13 },
];

const ThemeSelector = ({ setTheme, theme }) => {
  const handleChange = (event) => {
    setTheme({ ...themeOptions[event.target.value] });
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
