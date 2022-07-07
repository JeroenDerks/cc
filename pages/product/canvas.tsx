import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { themeOptions } from "components/ThemeSelector";
import { EditorTheme } from "types";
import { getHighlighter, setCDN, Highlighter } from "shiki";
import ProductPage from "components/ProductPage/ProductPage";
setCDN("https://unpkg.com/shiki/");

const Canvas = () => {
  const [theme, setTheme] = useState<EditorTheme>(themeOptions[7]);
  const [shiki, setShiki] = useState<Highlighter | null>(null);

  useEffect(() => {
    setShiki(null);
    getHighlighter({
      theme: "dark-plus",
    }).then((highlighter: Highlighter) => setShiki(highlighter));
  }, [theme]);

  return (
    <Box p={5} width={1} maxWidth={1600} m="auto">
      <ProductPage theme={theme} setTheme={setTheme} shiki={shiki} />
    </Box>
  );
};

export default Canvas;
