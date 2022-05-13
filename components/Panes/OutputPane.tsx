import React, { useState } from "react";
import Box from "@mui/material/Box";

import Basic from "../Sketches/partials/Basic";
import Dots from "../Sketches/partials/Dots";
import Rotate from "../Sketches/partials/Rotate";
import Perspective from "../Sketches/partials/Perspective";
import Shadow from "../Sketches/partials/Shadow";
import Window from "../Sketches/partials/Window";

import AddToCard from "../AddToCart";
import Sketches from "../Sketches";
import SketchSelector from "../SketchSelector";

import { ColoredDataSet, EditorTheme, Sketch } from "types";

const sketchOptions: Array<Sketch> = [
  { title: "Basic", sketch: Basic },
  { title: "Shadow", sketch: Shadow },
  { title: "Dots", sketch: Dots },
  { title: "Perspective", sketch: Perspective },
  { title: "Window", sketch: Window },
  { title: "Rotate", sketch: Rotate },
];

const OutputPane = ({
  keyCount,
  rawData,
  theme,
}: {
  keyCount: number;
  rawData: ColoredDataSet;
  theme: EditorTheme;
}) => {
  const [selectedId, setSelectedId] = useState<string>("5");

  const addToCard = () => {
    console.log(theme);
    console.log(rawData);
    console.log(selectedId);
  };

  return (
    <>
      <Box height={60} mb={1}>
        <SketchSelector
          sketchOptions={sketchOptions}
          setSelectedId={setSelectedId}
          selectedId={selectedId}
        />
      </Box>
      <Sketches
        key={keyCount}
        rawData={rawData}
        selectedId={selectedId}
        sketchOptions={sketchOptions}
        theme={theme.theme}
      />
      <AddToCard addToCard={addToCard} />
    </>
  );
};

export default OutputPane;
