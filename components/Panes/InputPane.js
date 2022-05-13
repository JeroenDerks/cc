import React from "react";
import ThemeSelector from "../ThemeSelector";
import LanguageSelector from "../LanguageSelector";
import EditorExample from "../Editor/Editor";
import { Box, Grid } from "@mui/material";

const InputPane = ({
  setTheme,
  setUserValue,
  theme,
  userValue,
  setLanguage,
  language,
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

      <EditorExample
        language={language}
        setUserValue={setUserValue}
        theme={theme.theme}
        userValue={userValue}
      />
    </>
  );
};

export default InputPane;
