import React from "react";
import { styled } from "@mui/material";

const Wrapper = styled("div")({
  position: "relative",
  height: "100%",
});

const BackgroundImage = styled("img")({
  width: "100%",
  height: "100%",
});

const ArtworkImage = styled("img")({
  width: 194,
  height: 132,
  position: "absolute",
  top: 68,
  left: 150,
  borderRadius: 2,
  boxShadow: "-4px 3px 5px -3px rgba(0,0,0,0.7)",
});

const OverLayImageTeam = styled("img")({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
});

const ProductImageTwo = ({ id }: { id: string }) => {
  return (
    <Wrapper>
      <BackgroundImage src="/images/team-bg.png" />
      <ArtworkImage
        src={`https://storage.googleapis.com/highlight_images/${id}_preview.jpg`}
      />

      <OverLayImageTeam src="/images/team-fg-blur.png" />
    </Wrapper>
  );
};

export default ProductImageTwo;
