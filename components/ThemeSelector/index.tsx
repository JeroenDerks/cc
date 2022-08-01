import React from "react";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { EditorTheme } from "types";

export const themeOptions: Array<EditorTheme> = [
  { title: "Dracula", code: "dracula", id: 0, bg: "#282A36" },
  { title: "Monokai", code: "monokai", id: 1, bg: "#272822" },
  { title: "One dark pro", code: "one-dark-pro", id: 2, bg: "#282c34" },
  { title: "Rose pine dawn", code: "rose-pine-dawn", id: 3, bg: "#faf4ed" },
  { title: "Slack ochin", code: "slack-ochin", id: 5, bg: "#ffffff" },
  { title: "solarized light", code: "solarized-light", id: 6, bg: "#fdf6e3" },
  { title: "VSC dark plus", code: "dark-plus", id: 6, bg: "#1E1E1E" },
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
