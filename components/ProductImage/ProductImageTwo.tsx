import React from "react";
import { styled } from "@mui/material";
import Image from "next/image";
import bg from "public/images/team-bg.png";
import fg from "public/images/team-fg.png";
import fgBlur from "public/images/team-fg-blur.png";

const Wrapper = styled("div")({
  position: "relative",
  height: "100%",
});

const BackgroundWrapper = styled("div")({
  width: "100%",
  height: "100%",
  position: "relative",
});

const ArtworkImage = styled("img")({
  width: 194,
  height: 132,
  position: "absolute",
  top: 68,
  left: 150,
  borderRadius: 2,
  zIndex: 1,
  boxShadow: "-4px 3px 5px -3px rgba(0,0,0,0.7)",
});

const OverlayWrapper = styled("div")({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  zIndex: 2,
});

const ProductImageTwo = ({ id }: { id: string }) => {
  return (
    <Wrapper>
      <BackgroundWrapper>
        <Image src={bg} layout="fill" placeholder="blur" />
      </BackgroundWrapper>
      <ArtworkImage
        src={`https://storage.googleapis.com/highlight_images/${id}_preview.jpg`}
      />
      <OverlayWrapper>
        <Image src={fg} layout="fill" placeholder="blur" />
        <Image src={fgBlur} layout="fill" placeholder="blur" />
      </OverlayWrapper>
    </Wrapper>
  );
};

export default ProductImageTwo;
