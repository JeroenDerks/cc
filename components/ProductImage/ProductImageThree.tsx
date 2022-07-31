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
  left: 40,
  borderRadius: 2,
  boxShadow: "-4px 3px 5px -3px rgba(0,0,0,0.7)",
});

const ProductImageThree = ({ id }: { id: string }) => {
  return (
    <Wrapper>
      <BackgroundImage src="/images/product_image_3_bg.jpg" />
      <ArtworkImage
        src={`https://storage.googleapis.com/highlight_images/${id}_preview.jpg`}
      />
    </Wrapper>
  );
};

export default ProductImageThree;
