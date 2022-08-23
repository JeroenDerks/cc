import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

import Box from "@mui/material/Box";
import ProductControls from "components/ProductControls";
import SketchSelector from "components/SketchSelector";

import ProductSwiper from "components/ProductSwiper";
import Basic from "components/Sketches/partials/Basic";
import BasicTeamPhoto from "components/Sketches/partials/Basic/BasicTeamPhoto";
import BasicWallPhoto from "components/Sketches/partials/Basic/BasicWallPhoto";
import Pill from "components/Sketches/partials/Pill";
import PillTeamPhoto from "components/Sketches/partials/Pill/PillTeamPhoto";
import PillWallPhoto from "components/Sketches/partials/Pill/PillWallPhoto";
import Perspective from "components/Sketches/partials/Perspective";
import PerspectiveTeamPhoto from "components/Sketches/partials/Perspective/PerspectiveTeamPhoto";
import PerspectiveWallPhoto from "components/Sketches/partials/Perspective/PerspectiveWallPhoto";
import Rotate from "components/Sketches/partials/Rotate";
import RotateTeamPhoto from "components/Sketches/partials/Rotate/RotateTeamPhoto";
import RotateWallPhoto from "components/Sketches/partials/Rotate/RotateWallPhoto";
import { uploadRawData } from "utils/uploadRawData";
import { ColoredDataSet, EditorTheme, LanguageOption, Sketch } from "types";

const sketchOptions: Array<Sketch> = [
  { title: "Basic", sketches: [Basic, BasicTeamPhoto, BasicWallPhoto] },
  { title: "Pills", sketches: [Pill, PillTeamPhoto, PillWallPhoto] },
  {
    title: "Perspective",
    sketches: [Perspective, PerspectiveTeamPhoto, PerspectiveWallPhoto],
  },
  { title: "Rotate", sketches: [Rotate, RotateWallPhoto, RotateTeamPhoto] },
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
    await router.push("/cart");
    setLoading(false);
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

      <ProductSwiper
        loading={loading}
        rawData={rawData}
        sketchId={sketchId}
        sketchOptions={sketchOptions}
        sketchRenewKey={sketchRenewKey}
        theme={theme}
        uuid={uuid}
      />

      <ProductControls addToCard={addToCard} loading={loading} />
    </>
  );
};

export default OutputPane;
