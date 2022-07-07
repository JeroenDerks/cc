import React, { useEffect, useState } from "react";
import HighLighter from "components/Highlighter";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputPane from "components/Panes/InputPane";
import OutputPane from "components/Panes/OutputPane";
import { languageOptions } from "components/LanguageSelector/LanguageSelector";
import { ColoredDataSet, EditorTheme, LanguageOption } from "types";
import { Highlighter } from "shiki";

const initialValue = `
import Radio from "@mui/material/Radio";
`;

const ProductPage = ({
  theme,
  setTheme,
  shiki,
}: {
  theme: EditorTheme;
  setTheme: React.Dispatch<React.SetStateAction<EditorTheme>>;
  shiki: Highlighter | null;
}) => {
  const [userValue, setUserValue] = useState<string>(initialValue);
  const [keyCount, setKeyCount] = useState<number>(1);
  const [language, setLanguage] = useState<LanguageOption>(languageOptions[7]);
  const [rawData, setRawData] = useState<ColoredDataSet>([[]]);

  return (
    <>
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
            theme={theme}
            userValue={userValue}
            language={language}
            rawData={rawData}
            keyCount={keyCount}
          />
        </Grid>
      </Grid>

      <HighLighter
        keyCount={keyCount}
        language={language}
        setKeyCount={setKeyCount}
        setRawData={(v: ColoredDataSet) => setRawData(v)}
        theme={theme.theme}
        userValue={userValue}
      />
    </>
  );
};

export default ProductPage;
