import React from "react";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { LanguageOption } from "types";
import { Lang } from "shiki";

const selectedLanguages: { title: string; code: Lang }[] = [
  { title: "C", code: "c" },
  { title: "C#", code: "c#" },
  { title: "C++", code: "cpp" },
  { title: "CSS", code: "css" },
  { title: "Go", code: "go" },
  { title: "GraphQL", code: "graphql" },
  { title: "Java", code: "java" },
  { title: "Javascript", code: "javascript" },
  { title: "Json", code: "json" },
  { title: "JSX", code: "jsx" },
  { title: "Kotlin", code: "kotlin" },
  { title: "Markdown", code: "markdown" },
  { title: "PHP", code: "php" },
  { title: "Python", code: "python" },
  { title: "Ruby", code: "ruby" },
  { title: "Rust", code: "rust" },
  { title: "Sass", code: "sass" },
  { title: "Scss", code: "scss" },
  { title: "SQL", code: "sql" },
  { title: "Svelte", code: "svelte" },
  { title: "Swift", code: "swift" },
  { title: "TSX", code: "tsx" },
  { title: "TypeScript", code: "typescript" },
];
export const languageOptions: Array<LanguageOption> = selectedLanguages.map(
  ({ title, code }, index) => {
    return { title, code, id: index };
  }
);

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
