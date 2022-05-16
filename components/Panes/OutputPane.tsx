import React, { useState } from "react";
import { useCart } from "react-use-cart";
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
import { v4 as uuidv4 } from "uuid";

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
  const [sketchId, setSketchId] = useState<string>("5");
  const { addItem } = useCart();

  const addToCard = () => {
    const id = uuidv4();

    console.log(id);

    addItem({
      name: "canvas_60_40",
      price: 6900,
      quantity: 1,
      id,
      theme,
      rawData,
      sketchId,
    });
  };

  return (
    <>
      <Box height={60} mb={1}>
        <SketchSelector
          sketchOptions={sketchOptions}
          setSketchId={setSketchId}
          sketchId={sketchId}
        />
      </Box>
      <Sketches
        key={keyCount}
        rawData={rawData}
        sketchId={sketchId}
        sketchOptions={sketchOptions}
        theme={theme.theme}
      />

      <AddToCard addToCard={addToCard} />
    </>
  );
};

export default OutputPane;
