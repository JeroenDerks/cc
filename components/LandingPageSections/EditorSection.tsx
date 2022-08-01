import React, { useEffect, useState } from "react";
import type { ColoredDataSet, EditorTheme, LanguageOption } from "types";
import { convertTextToArtworkColors } from "utils/convertTextToArtworkColors";
import { getHighlighter, Highlighter } from "shiki";
import { intialEditorValue } from "utils/intialEditorValue";
import { languageOptions } from "components/LanguageSelector/LanguageSelector";
import { themeOptions } from "components/ThemeSelector";
import Grid from "@mui/material/Grid";
import InputPane from "components/Panes/InputPane";
import Box from "@mui/material/Box";
import OutputPane from "components/Panes/OutputPane";
import Section from "components/Section";
import { gridP } from "theme";
import { Typography } from "@mui/material";

const EditorSection = ({ id }: { id: string }) => {
  const [language, setLanguage] = useState<LanguageOption>(languageOptions[14]);
  const [rawData, setRawData] = useState<ColoredDataSet>([[]]);
  const [shiki, setShiki] = useState<Highlighter | null>(null);
  const [sketchRenewKey, setSketchRenewKey] = useState<number>(1);
  const [theme, setTheme] = useState<EditorTheme>(themeOptions[6]);
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
    <Section id={id}>
      <Box py={20} px={gridP}>
        <Typography variant="h4" mb={5}>
          Paste it right here...
        </Typography>
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
    </Section>
  );
};

export default EditorSection;
