import React, { useEffect, useState } from "react";
import { getHighlighter, setCDN } from "shiki";
import EditorComp from "./Editor";

setCDN("https://unpkg.com/shiki/");

const Shiki = () => {
  const [shiki, setShiki] = useState();

  useEffect(() => {
    !shiki &&
      getHighlighter({
        theme: "dark-plus",
      }).then((highlighter) => setShiki(highlighter));
  }, []);

  return <>{shiki && <EditorComp shiki={shiki} />}</>;
};

export default Shiki;
