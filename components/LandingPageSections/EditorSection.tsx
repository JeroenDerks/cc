import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputPane from "components/Panes/InputPane";
import OutputPane from "components/Panes/OutputPane";
import Section from "components/Section";
import Typography from "@mui/material/Typography";
import { convertTextToArtworkColors } from "utils/convertTextToArtworkColors";
import { intialEditorValue } from "utils/intialEditorValue";
import type { ColoredDataSet, EditorTheme, LanguageOption } from "types";
import type { Highlighter } from "shiki";

const EditorSection = ({
  id,
  language,
  setLanguage,
  setTheme,
  shiki,
  theme,
}: {
  id: string;
  language: LanguageOption;
  setLanguage: (v: LanguageOption) => void;
  setTheme: (v: EditorTheme) => void;
  shiki: Highlighter | null;
  theme: EditorTheme;
}) => {
  const [rawData, setRawData] = useState<ColoredDataSet>([[]]);
  const [sketchRenewKey, setSketchRenewKey] = useState<number>(1);
  const [userValue, setUserValue] = useState<string>(intialEditorValue);

  const regenerateArtWork = () => {
    setRawData(convertTextToArtworkColors());
    setSketchRenewKey((c) => c + 1);
  };

  const handleInputTextChange = (inputValue: string) => {
    setUserValue(inputValue);
    regenerateArtWork();
  };

  // regenrate art work every time shiki gets updated
  useEffect(() => {
    const shikiTheme = shiki?.getTheme();
    if (shikiTheme && shikiTheme.name === theme.code) {
      regenerateArtWork();
    }
  }, [shiki]);

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
