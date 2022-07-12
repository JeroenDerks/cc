import React from "react";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { LanguageOption } from "types";

export const languageOptions: Array<LanguageOption> = [
  { title: "C", code: "c", id: 0 },
  { title: "C++", code: "cpp", id: 1 },
  { title: "CSS", code: "css", id: 2 },
  { title: "Go", code: "go", id: 3 },
  { title: "GraphQL", code: "graphql", id: 4 },
  { title: "Javascript", code: "javascript", id: 5 },
  { title: "Json", code: "json", id: 6 },
  { title: "JSX", code: "jsx", id: 7 },
  { title: "Less", code: "less", id: 8 },
  { title: "Markdown", code: "markdown", id: 9 },
  { title: "Python", code: "python", id: 10 },
  { title: "Sass", code: "sass", id: 11 },
  { title: "Scss", code: "scss", id: 12 },
  { title: "SQL", code: "sql", id: 13 },
  { title: "TSX", code: "tsx", id: 14 },
  { title: "TypeScript", code: "typescript", id: 15 },
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
