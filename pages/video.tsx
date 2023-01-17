import React, { useEffect, useState } from "react";
import type { ColoredDataSet, EditorTheme, LanguageOption } from "types";
import { convertTextToArtworkColors } from "utils/convertTextToArtworkColors";
import { getHighlighter, Highlighter } from "shiki";
import { intialEditorValue } from "utils/intialEditorValue";
import { languageOptions } from "components/LanguageSelector/LanguageSelector";
import { themeOptions } from "components/ThemeSelector";
import Grid from "@mui/material/Grid";
import VideoBackground from "components/Sketches/VideoBackground/VideoBackground";
import { Box, Stack, Typography, Button } from "@mui/material";
import Editor from "components/Editor";
import EditorSection from "components/LandingPageSections/EditorSection";
import OutputPane from "components/Panes/OutputPane";
import InputPane from "components/Panes/InputPane";

const Video = () => {
  const defaultLanguage =
    languageOptions.find(({ code }) => code === "tsx") || languageOptions[0];
  const [language, setLanguage] = useState<LanguageOption>(defaultLanguage);
  const [rawData, setRawData] = useState<ColoredDataSet>([[]]);
  const [shiki, setShiki] = useState<Highlighter | null>(null);
  const [sketchRenewKey, setSketchRenewKey] = useState<number>(1);
  const [theme, setTheme] = useState<EditorTheme>(themeOptions[6]);
  const [userValue, setUserValue] = useState<string>(intialEditorValue);

  console.log(JSON.stringify(rawData));
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
    <>
      <VideoBackground />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100vw"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Stack width={1400} my={10}>
          <Typography variant="h3" textAlign="center" mb={4}>
            Turn your code into art
          </Typography>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <Box maxWidth="calc(100vw - 48px)" width={1}>
                <InputPane
                  language={language}
                  setLanguage={setLanguage}
                  setTheme={setTheme}
                  setUserValue={handleInputTextChange}
                  shiki={shiki}
                  theme={theme}
                  userValue={userValue}
                />
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Box maxWidth="calc(100vw - 48px)" width={1}>
                <OutputPane
                  language={language}
                  rawData={rawData}
                  sketchRenewKey={sketchRenewKey}
                  theme={theme}
                  userValue={userValue}
                />
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};
export default Video;
