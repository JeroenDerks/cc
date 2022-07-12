import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { themeOptions } from "components/ThemeSelector";
import { EditorTheme } from "types";
import { getHighlighter, setCDN, Highlighter } from "shiki";
import ProductPage from "components/ProductPage/ProductPage";
setCDN("https://unpkg.com/shiki/");

const Canvas = () => {
  const [theme, setTheme] = useState<EditorTheme>(themeOptions[3]);
  const [shiki, setShiki] = useState<Highlighter | null>(null);
  const [renderCount, setRenderCount] = useState<number>(1);

  useEffect(() => {
    setShiki(null);

    getHighlighter({
      theme: theme.code,
    }).then((highlighter: Highlighter) => {
      setShiki(highlighter);
      setRenderCount((c) => c + 1);
    });
  }, [theme]);

  return (
    <Box p={5} width={1} maxWidth={1600} m="auto">
      <ProductPage
        renderCount={renderCount}
        setRenderCount={(v) => setRenderCount(v)}
        setTheme={setTheme}
        shiki={shiki}
        theme={theme}
      />
    </Box>
  );
};

export default Canvas;
