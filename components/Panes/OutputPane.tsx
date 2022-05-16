import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
  const [uuid, setUuid] = useState<string>("");
  const { addItem } = useCart();

  console.log(uuid);
  useEffect(() => {
    setUuid(uuidv4());
  }, [sketchId]);

  const addToCard = () => {
    addItem({
      name: "canvas_60_40",
      price: 6900,
      quantity: 1,
      id: uuid,
      theme,
      rawData,
      sketchId,
    });
    setUuid(uuidv4());
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
        uuid={uuid}
      />

      <AddToCard addToCard={addToCard} />
    </>
  );
};

export default OutputPane;
