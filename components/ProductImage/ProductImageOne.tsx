import React, { useState } from "react";
import { styled } from "@mui/material";
import { wallPhotoDimensions } from "components/Sketches/constants";
import { sketchHeigth, sketchWidth } from "components/Sketches/constants";
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

const ProductImage = ({ id }: { id: string }) => {
  const [init, setInit] = useState<boolean>(false);
  const scale = wallPhotoDimensions(1);

  return (
    <Wrapper>
      <BackgroundImage
        src="/images/hero-bg-small.jpg"
        onLoad={() => setInit(true)}
      />
      {init && (
        <ArtworkImage
          src={`https://storage.googleapis.com/highlight_images/${id}_preview.jpg`}
          x={scale.x}
          y={scale.y}
          w={scale.w}
          h={scale.h}
        />
      )}
    </Wrapper>
  );
};

export default ProductImage;
