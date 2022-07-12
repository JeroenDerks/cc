import React, { useState } from "react";
import HighLighter from "components/Highlighter";
import Grid from "@mui/material/Grid";
import InputPane from "components/Panes/InputPane";
import OutputPane from "components/Panes/OutputPane";
import { languageOptions } from "components/LanguageSelector/LanguageSelector";
import { ColoredDataSet, EditorTheme, LanguageOption } from "types";
import { Highlighter } from "shiki";

const initialValue = `
import React from "react";

/**
 * Paste your code in this text area to convert it into wall art
 * @param input represents your source code
 * @returns art that will inspire your office
 */

const YourCodeHere = ({ input }: { input: string }) => {
  return <div>{input}</div>;
};

export default YourCodeHere;
`;

const ProductPage = ({
  renderCount,
  setRenderCount,
  setTheme,
  shiki,
  theme,
}: {
  renderCount: number;
  setRenderCount: (v: number) => void;
  setTheme: React.Dispatch<React.SetStateAction<EditorTheme>>;
  shiki: Highlighter | null;
  theme: EditorTheme;
}) => {
  const [userValue, setUserValue] = useState<string>(initialValue);
  const [language, setLanguage] = useState<LanguageOption>(languageOptions[14]);
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
            renderCount={renderCount}
          />
        </Grid>
      </Grid>

      <HighLighter
        renderCount={renderCount}
        language={language}
        setRenderCount={setRenderCount}
        setRawData={(v: ColoredDataSet) => setRawData(v)}
        theme={theme}
        userValue={userValue}
      />
    </>
  );
};

export default ProductPage;
