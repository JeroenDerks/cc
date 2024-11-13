import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import HeroAnimatedSketch from "./HeroAnimatedSketch";
import { intialEditorValue } from "utils/intialEditorValue";
import { codeToTokens, TokensResult } from "shiki";
import { hexToRgb } from "utils";

const HeroAnimated = () => {
  const [result, setResult] = useState<TokensResult | null>(null);

  useEffect(() => {
    const init = async () => {
      const tokensResult = await codeToTokens(intialEditorValue, {
        lang: "tsx",
        theme: "dark-plus",
      });
      setResult(tokensResult);
    };
    init();
  }, []);

  const getBg = () => {
    if (!result?.bg) return [100, 100, 100];
    return hexToRgb(result.bg);
  };

  return (
    <>
      {result ? (
        <HeroAnimatedSketch bg={getBg()} data={result.tokens} />
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default HeroAnimated;
