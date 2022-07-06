const shiki = require("shiki");

export const getData = () => {
  shiki
    .getHighlighter({
      theme: "dark-plus",
    })
    .then((highlighter) => {
      const html = highlighter.codeToHtml(
        `import React, { useRef, useState, useEffect } from "react";
      // import EditorLineNumbers from "./EditorLineNumbers";
      import { default as InputEditor } from "react-simple-code-editor";
      import { EditorWrapper } from "./Editor.styles";
      import { EditorTheme, LanguageOption } from "types";
      import { Prism as SyntaxHighlighter } from`,
        "tsx"
      );

      const out = `
  <title>Shiki</title>
  <link rel="stylesheet" href="style.css">
  ${html}`;

      console.log(out);

      return out;
    });
};
