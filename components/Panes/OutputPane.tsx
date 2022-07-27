import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCart } from "react-use-cart";
import Box from "@mui/material/Box";

import Basic from "../Sketches/partials/Basic";
import Dots from "../Sketches/partials/Dots";
import Rotate from "../Sketches/partials/Rotate";
import Perspective from "../Sketches/partials/Perspective";
// import Shadow from "../Sketches/partials/Shadow";
// import Window from "../Sketches/partials/Window";

import AddToCard from "../AddToCart";
import Sketches from "../Sketches";
import SketchSelector from "../SketchSelector";

import { ColoredDataSet, EditorTheme, LanguageOption, Sketch } from "types";
import { uploadRawData } from "utils/uploadRawData";
import { useRouter } from "next/router";

const sketchOptions: Array<Sketch> = [
  { title: "Basic", sketch: Basic },
  // { title: "Shadow", sketch: Shadow },
  { title: "Pills", sketch: Dots },
  { title: "Perspective", sketch: Perspective },
  // { title: "Window", sketch: Window },
  { title: "Rotate", sketch: Rotate },
];

const OutputPane = ({
  language,
  rawData,
  sketchRenewKey,
  theme,
  userValue,
}: {
  language: LanguageOption;
  rawData: ColoredDataSet;
  sketchRenewKey: number;
  theme: EditorTheme;
  userValue: string;
}) => {
  const [sketchId, setSketchId] = useState<string>("0");
  const [loading, setLoading] = useState<boolean>(false);
  const [uuid, setUuid] = useState<string>("");
  const { addItem } = useCart();
  const router = useRouter();

  useEffect(() => {
    setUuid(uuidv4());
  }, [sketchId]);

  const addToCard = async () => {
    setLoading(true);
    addItem({ name: "canvas_60_40", price: 6900, quantity: 1, id: uuid });
    await uploadRawData({ uuid, userValue, sketchId, theme, language });
    setUuid(uuidv4());
    router.push("/cart");
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
        key={sketchRenewKey}
        loading={loading}
        rawData={rawData}
        sketchId={sketchId}
        sketchOptions={sketchOptions}
        theme={theme}
        setLoading={setLoading}
        uuid={uuid}
      />

      <AddToCard addToCard={addToCard} loading={loading} />
    </>
  );
};

export default OutputPane;
