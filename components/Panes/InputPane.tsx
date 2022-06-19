import React from "react";
import ThemeSelector from "../ThemeSelector";
import LanguageSelector from "../LanguageSelector";
import Editor from "../Editor/Editor";
import { Box, Grid } from "@mui/material";
import { EditorTheme, LanguageOption } from "types";

const InputPane = ({
  language,
  setLanguage,
  setTheme,
  setUserValue,
  theme,
  userValue,
}: {
  language: LanguageOption;
  setLanguage: (v: LanguageOption) => void;
  setTheme: (v: EditorTheme) => void;
  setUserValue: (v: string) => void;
  theme: EditorTheme;
  userValue: string;
}) => {
  return (
    <>
      <Box height={60} mb={1}>
        <Grid container columnSpacing={2}>
          <Grid item xs={6}>
            <ThemeSelector setTheme={setTheme} theme={theme} />
          </Grid>
          <Grid item xs={6}>
            <LanguageSelector setLanguage={setLanguage} language={language} />
          </Grid>
        </Grid>
      </Box>

      <Editor
        language={language}
        setUserValue={setUserValue}
        theme={theme}
        userValue={userValue}
      />
    </>
  );
};

export default InputPane;
