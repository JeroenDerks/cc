import React, { useEffect, useState } from "react";
import FAQ from "components/FAQ";
import Hero from "components/Hero";
import HeroAnimated from "components/Hero/HeroAnimated";
// import PromiseOne from "components/LandingPageSections/PromiseOne";
import PromiseTwo from "components/LandingPageSections/PromiseTwo";
import HowItWorks from "components/LandingPageSections/HowItWorks";
import EditorSection from "components/LandingPageSections/EditorSection";
import ProductDetails from "components/LandingPageSections/ProductDetails";

import { intialEditorValue } from "utils/intialEditorValue";
import { languageOptions } from "components/LanguageSelector/LanguageSelector";
import { themeOptions } from "components/ThemeSelector";
import { getHighlighter, Highlighter } from "shiki";
import type { EditorTheme, LanguageOption } from "types";

const Index = () => {
  const [shiki, setShiki] = useState<Highlighter | null>(null);
  const [theme, setTheme] = useState<EditorTheme>(themeOptions[6]);
  const [language, setLanguage] = useState<LanguageOption>(languageOptions[14]);

  useEffect(() => {
    if (!theme) return;
    getHighlighter({
      theme: theme.code,
      langs: languageOptions.map(({ code }) => code),
    }).then((hl: Highlighter) => {
      setShiki(hl);

      console.log(
        hl.codeToThemedTokens(intialEditorValue, "tsx", "dark-plus", {
          includeExplanation: false,
        })
      );
    });
  }, [theme]);

  return (
    <>
      {/* <Hero /> */}
      <HeroAnimated shiki={shiki} />
      {/* <PromiseOne /> */}
      <PromiseTwo />
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
      <FAQ />
    </>
  );
};

export default Index;
