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

const OverLayImage = styled("img")({
  width: 214,
  height: 146,
  position: "absolute",
  top: 68,
  left: 216,
  borderRadius: 2,
});

const ProductImage = ({ id }: { id: string }) => {
  return (
    <Wrapper>
      <BackgroundImage src="/images/product_image_1.jpg" />
      <OverLayImage
        src={`https://storage.googleapis.com/highlight_images/${id}_preview.jpg`}
      />
    </Wrapper>
  );
};

export default ProductImage;
