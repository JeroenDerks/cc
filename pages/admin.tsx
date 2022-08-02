import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputPane from "components/Panes/InputPane";
import OutputPane from "components/Panes/OutputPane";
import Section from "components/Section";
import Typography from "@mui/material/Typography";

import { languageOptions } from "components/LanguageSelector/LanguageSelector";
import type { ColoredDataSet, EditorTheme, LanguageOption } from "types";
import { intialEditorValue } from "utils/intialEditorValue";
import { themeOptions } from "components/ThemeSelector";
import { getHighlighter, Highlighter } from "shiki";
import { convertTextToArtworkColors } from "utils/convertTextToArtworkColors";

const Admin = () => {
  const [name, setName] = useState<string>();
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
    if (!theme || !language) return;
    getHighlighter({
      theme: theme.code,
      langs: languageOptions.map(({ code }) => code),
    }).then((hl: Highlighter) => {
      setShiki(hl);
    });
  }, [theme, language]);

  // regenrate art work every time shiki gets updated
  useEffect(() => {
    const shikiTheme = shiki?.getTheme();
    if (shikiTheme && shikiTheme.name === theme.code) {
      regenerateArtWork();
    }
  }, [shiki]);

  const downloadJson = (exportObj: string) => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportObj));
    let downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", name + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <Section>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        value={name}
      />
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
              downloadJson={downloadJson}
            />
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};
export default Admin;
