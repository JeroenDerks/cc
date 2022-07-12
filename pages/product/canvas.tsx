import React, { useEffect, useState } from "react";
import type { ColoredDataSet, EditorTheme, LanguageOption } from "types";
import { convertTextToArtworkColors } from "utils/convertTextToArtworkColors";
import { getHighlighter, setCDN, Highlighter } from "shiki";
import { intialEditorValue } from "utils/intialEditorValue";
import { languageOptions } from "components/LanguageSelector/LanguageSelector";
import { themeOptions } from "components/ThemeSelector";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputPane from "components/Panes/InputPane";
import OutputPane from "components/Panes/OutputPane";
setCDN("https://unpkg.com/shiki/");

const Canvas = () => {
  const [language, setLanguage] = useState<LanguageOption>(languageOptions[14]);
  const [rawData, setRawData] = useState<ColoredDataSet>([[]]);
  const [shiki, setShiki] = useState<Highlighter | null>(null);
  const [sketchRenewKey, setSketchRenewKey] = useState<number>(1);
  const [theme, setTheme] = useState<EditorTheme>(themeOptions[3]);
  const [userValue, setUserValue] = useState<string>(intialEditorValue);

  const regenerateArtWork = () => {
    setRawData(convertTextToArtworkColors());
    setSketchRenewKey((c) => c + 1);
  };

  const handleInputTextChange = (inputValue: string) => {
    setUserValue(inputValue);
    regenerateArtWork();
  };

  useEffect(() => {
    if (!theme) return;
    getHighlighter({
      theme: theme.code,
      langs: languageOptions.map(({ code }) => code),
    }).then((hl: Highlighter) => {
      setShiki(hl);
    });
  }, [theme]);

  // regenrate art work every time shiki gets updated
  useEffect(() => {
    const shikiTheme = shiki?.getTheme();
    if (shikiTheme && shikiTheme.name === theme.code) {
      regenerateArtWork();
    }
  }, [shiki]);

  return (
    <Box p={5} width={1} maxWidth={1600} m="auto">
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <InputPane
            language={language}
            setLanguage={setLanguage}
            setTheme={setTheme}
            setUserValue={handleInputTextChange}
            shiki={shiki}
            theme={theme}
            userValue={userValue}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <OutputPane
            language={language}
            rawData={rawData}
            sketchRenewKey={sketchRenewKey}
            theme={theme}
            userValue={userValue}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Canvas;
