import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

import Box from "@mui/material/Box";
import AddToCart from "components/AddToCart";
import SketchSelector from "components/SketchSelector";

import ClassicWallPhoto from "components/Sketches/Classic/ClassicWallPhoto";
import PerspectiveWallPhoto from "components/Sketches/Perspective/PerspectiveWallPhoto";
import RotateWallPhoto from "components/Sketches/Rotate/RotateWallPhoto";
import { uploadRawData } from "utils/uploadRawData";
import { ColoredDataSet, EditorTheme, LanguageOption, Sketch } from "types";
import { useScalingFactor } from "utils/useScalingFactor";
import { convertColorToRGB } from "utils";

export const sketchOptions: Array<Sketch> = [
  { title: "Classic", sketch: ClassicWallPhoto },
  { title: "Perspective", sketch: PerspectiveWallPhoto },
  { title: "Rotate", sketch: RotateWallPhoto },
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

  const scalingFactor = typeof window !== "undefined" ? useScalingFactor() : 1;
  const SelectedSketch = sketchOptions[parseInt(sketchId)].sketch;

  useEffect(() => {
    setUuid(uuidv4());
  }, [sketchId]);

  const addToCard = async () => {
    setLoading(true);
    addItem({
      name: "Canvas 60 x 40",
      price: 6900,
      quantity: 1,
      id: uuid,
      theme,
      language,
      sketchId,
    });
    await uploadRawData({ uuid, userValue, sketchId, theme, language });
    setUuid(uuidv4());
    await router.push("/cart");
    setLoading(false);
  };

  return (
    <Box width={1}>
      <Box mb={1}>
        <SketchSelector
          sketchOptions={sketchOptions}
          setSketchId={setSketchId}
          sketchId={sketchId}
        />
      </Box>

      <Box my="14px" borderRadius="4px" overflow="hidden">
        <SelectedSketch
          bg={convertColorToRGB(theme.bg)}
          key={sketchRenewKey}
          loading={loading}
          scale={scalingFactor}
          data={rawData}
          uuid={uuid}
        />
      </Box>

      <AddToCart addToCard={addToCard} loading={loading} />
    </Box>
  );
};

export default OutputPane;
