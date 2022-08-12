import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import HeroAnimatedSketch from "./HeroAnimatedSketch";
import { intialEditorValue } from "utils/intialEditorValue";
import type { Highlighter } from "shiki";

const HeroAnimated = ({ shiki }: { shiki: Highlighter | null }) => {
  return (
    <>
      {shiki ? (
        <HeroAnimatedSketch
          bg={[100, 100, 100]}
          data={shiki.codeToThemedTokens(
            intialEditorValue,
            "tsx",
            "dark-plus",
            { includeExplanation: false }
          )}
        />
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default HeroAnimated;
