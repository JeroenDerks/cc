import React, { useState } from "react";
import Editor from "react-simple-code-editor";

const EditorComp = ({ shiki }: { shiki: any }) => {
  const [code, setCode] = useState(
    "import baseDifference from './.internal/baseDifference.js'"
  );

  return (
    <Editor
      value={code}
      onValueChange={(code) => setCode(code)}
      highlight={(code) => shiki && shiki.codeToHtml(code, "tsx")}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 8,
      }}
    />
  );
};

export default EditorComp;
