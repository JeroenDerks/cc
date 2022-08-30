import React, { useState } from "react";
import { styled } from "@mui/material";
import {
  sketchHeigth,
  sketchWidth,
  teamPhotoDimensions,
} from "components/Sketches/constants";
import type { ArtworkScale } from "components/Sketches/constants";

const converToPercent = (input: number, parent: number) => {
  return (input / parent) * 100 + "%";
};

const Wrapper = styled("div")({
  position: "relative",
  height: "100%",
});

const BackgroundImage = styled("img")({
  width: "100%",
  height: "100%",
});

const ArtworkImage = styled("img")<ArtworkScale>(({ x, y, w, h }) => ({
  borderRadius: 2,
  boxShadow: "-4px 3px 5px -3px rgba(0,0,0,0.7)",
  height: converToPercent(h, sketchHeigth),
  left: converToPercent(x, sketchWidth),
  position: "absolute",
  top: converToPercent(y, sketchHeigth),
  width: converToPercent(w, sketchWidth),
}));

const OverLayImageTeam = styled("img")({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
});

const ProductImageTwo = ({ id }: { id: string }) => {
  const [init, setInit] = useState<boolean>(false);
  const scale = teamPhotoDimensions(1);

  return (
    <Wrapper>
      <BackgroundImage src="/images/team-bg.png" onLoad={() => setInit(true)} />
      {init && (
        <ArtworkImage
          src={`https://storage.googleapis.com/highlight_images/${id}_preview.jpg`}
          x={scale.x}
          y={scale.y}
          w={scale.w}
          h={scale.h}
        />
      )}

      <OverLayImageTeam src="/images/team-fg-blur.png" />
    </Wrapper>
  );
};

export default ProductImageTwo;
