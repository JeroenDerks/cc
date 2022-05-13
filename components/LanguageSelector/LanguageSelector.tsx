import React from "react";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";

import { SelectChangeEvent } from "@mui/material";
import { LanguageOption } from "types";

export const languageOptions: Array<LanguageOption> = [
  { title: "Markup", code: "markup", id: 0 },
  { title: "Bash", code: "bash", id: 1 },
  { title: "C-like", code: "clike", id: 2 },
  { title: "C", code: "c", id: 3 },
  { title: "C++", code: "cpp", id: 4 },
  { title: "CSS", code: "css", id: 5 },
  { title: "Javascript", code: "javascript", id: 6 },
  { title: "JSX", code: "jsx", id: 7 },
  { title: "Coffeescript", code: "coffeescript", id: 8 },
  { title: "Diff", code: "diff", id: 9 },
  { title: "Git", code: "git", id: 10 },
  { title: "Go", code: "go", id: 11 },
  { title: "GraphQL", code: "graphql", id: 12 },
  { title: "Handlebars", code: "handlebars", id: 13 },
  { title: "Json", code: "json", id: 14 },
  { title: "Less", code: "less", id: 15 },
  { title: "Makefile", code: "makefile", id: 16 },
  { title: "Markdown", code: "markdown", id: 17 },
  { title: "Objective-C", code: "objectivec", id: 18 },
  { title: "OCaml", code: "ocaml", id: 19 },
  { title: "Python", code: "python", id: 20 },
  { title: "Reason", code: "reason", id: 21 },
  { title: "Sass", code: "sass", id: 22 },
  { title: "Scss", code: "scss", id: 23 },
  { title: "SQL", code: "sql", id: 24 },
  { title: "Stylus", code: "stylus", id: 25 },
  { title: "TSX", code: "tsx", id: 26 },
  { title: "TypeScript", code: "typescript", id: 27 },
  { title: "WebAssembly", code: "wasm", id: 28 },
  { title: "YAML", code: "yaml", id: 29 },
];

const LanguageSelector = ({
  language,
  setLanguage,
}: {
  language: LanguageOption;
  setLanguage: (v: LanguageOption) => void;
}) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    const { value } = event.target as HTMLSelectElement;
    setLanguage({ ...languageOptions[parseInt(value)] });
  };

  return (
    <FormControl style={{ width: "100%" }}>
      <InputLabel id="language-label">Language</InputLabel>
      <Select
        label="Language"
        onChange={handleChange}
        value={`${language?.id}` || "1"}
      >
        {languageOptions.map(({ title, id }) => (
          <MenuItem value={id} key={id}>
            {title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
