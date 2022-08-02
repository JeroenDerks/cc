import React, { useEffect, useState } from "react";
import FAQ from "components/FAQ";
import Hero from "components/LandingPageSections/Hero";
import PromiseTwo from "components/LandingPageSections/PromiseTwo";
import HowItWorks from "components/LandingPageSections/HowItWorks";
import ProductDetails from "components/LandingPageSections/ProductDetails";

import { languageOptions } from "components/LanguageSelector/LanguageSelector";
import type { ColoredDataSet, EditorTheme, LanguageOption } from "types";
import { intialEditorValue } from "utils/intialEditorValue";
import { themeOptions } from "components/ThemeSelector";
import { getHighlighter, Highlighter } from "shiki";
import { convertTextToArtworkColors } from "utils/convertTextToArtworkColors";
import EditorSection from "components/LandingPageSections/EditorSection";

import { useRouter } from "next/router";

const Index = () => {
  const [language, setLanguage] = useState<LanguageOption>(languageOptions[14]);
  const [rawData, setRawData] = useState<ColoredDataSet>([[]]);
  const [shiki, setShiki] = useState<Highlighter | null>(null);
  const [sketchRenewKey, setSketchRenewKey] = useState<number>(1);
  const [theme, setTheme] = useState<EditorTheme>(themeOptions[6]);
  const [userValue, setUserValue] = useState<string>(intialEditorValue);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const leadName = router.query.lead;
      console.log("Get data for: ", leadName);
    };
    if (router.query.lead) getData();
  }, [router.query.lead]);

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

  return (
    <>
      <Hero />
      <PromiseTwo />
      <HowItWorks />
      <EditorSection
        id="editor"
        language={language}
        rawData={rawData}
        setLanguage={setLanguage}
        setTheme={setTheme}
        setUserValue={handleInputTextChange}
        shiki={shiki}
        sketchRenewKey={sketchRenewKey}
        theme={theme}
        userValue={userValue}
      />

      <ProductDetails />
      <FAQ />
    </>
  );
};

export default Index;
