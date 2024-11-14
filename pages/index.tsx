import React, { useEffect, useState } from "react";
import FAQ from "components/FAQ";
import Hero from "components/Hero";
// import PromiseOne from "components/LandingPageSections/PromiseOne";
import PromiseTwo from "components/LandingPageSections/PromiseTwo";
import HowItWorks from "components/LandingPageSections/HowItWorks";
import EditorSection from "components/LandingPageSections/EditorSection";
import ProductDetails from "components/LandingPageSections/ProductDetails";

import { intialEditorValue } from "utils/intialEditorValue";
import { languageOptions } from "components/LanguageSelector/LanguageSelector";
import { themeOptions } from "components/ThemeSelector";
import type { EditorTheme, LanguageOption } from "types";
import { codeToTokens, TokensResult } from "shiki";
import { hexToRgb } from "utils";
import HeroAnimatedSketch from "components/Hero/HeroAnimatedSketch";
import CircularProgress from "@mui/material/CircularProgress";

const Index = () => {
  const [theme, setTheme] = useState<EditorTheme>(themeOptions[6]);
  const [language, setLanguage] = useState<LanguageOption>(languageOptions[14]);
  const [result, setResult] = useState<TokensResult | null>(null);

  useEffect(() => {
    const init = async () => {
      const tokensResult = await codeToTokens(intialEditorValue, {
        lang: language.code,
        theme: theme.code,
      });
      setResult(tokensResult);
    };
    if (language && theme) init();
  }, [language, theme]);

  return (
    <>
      {/* <Hero /> */}
      {result ? (
        <HeroAnimatedSketch
          bg={!result?.bg ? [100, 100, 100] : hexToRgb(result.bg)}
          data={result.tokens}
        />
      ) : (
        <CircularProgress />
      )}
      {/* <PromiseOne /> */}
      {/* <PromiseTwo />
      <HowItWorks />
      <EditorSection
        id="editor"
        language={language}
        setLanguage={setLanguage}
        setTheme={setTheme}
        shiki={shiki}
        theme={theme}
      />
      <ProductDetails />
      <FAQ /> */}
    </>
  );
};

export default Index;
