import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputPane from "components/Panes/InputPane";
import OutputPane from "components/Panes/OutputPane";
import Section from "components/Section";
import Typography from "@mui/material/Typography";
import type { Highlighter } from "shiki";
import type { ColoredDataSet, EditorTheme, LanguageOption } from "types";

const EditorSection = ({
  id,
  downloadJson,
  language,
  setLanguage,
  setTheme,
  sketchRenewKey,
  rawData,
  setUserValue,
  shiki,
  theme,
  userValue,
}: {
  id: string;
  downloadJson?: (v: string) => void;
  language: LanguageOption;
  setLanguage: (v: LanguageOption) => void;
  setTheme: (v: EditorTheme) => void;
  rawData: ColoredDataSet;
  sketchRenewKey: number;
  setUserValue: (v: string) => void;
  shiki: Highlighter | null;
  theme: EditorTheme;
  userValue: string;
}) => {
  return (
    <Section id={id} hideSideBorders>
      <Box py={20}>
        <Typography variant="h4" mb={5}>
          Paste it right here...
        </Typography>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <InputPane
              language={language}
              setLanguage={setLanguage}
              setTheme={setTheme}
              setUserValue={setUserValue}
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
              downloadJson={downloadJson}
            />
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};

export default EditorSection;
