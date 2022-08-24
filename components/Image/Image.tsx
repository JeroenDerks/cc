import React from "react";
import Image, { StaticImageData } from "next/image";
import Box from "@mui/material/Box";

const ImageComponent = ({
  height,
  src,
  alt,
}: {
  height: number | { xs: number; sm: number; md: number };
  src: StaticImageData;
  alt: string;
}) => {
  return (
    <Box position="relative" height={height}>
      <Image
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        src={src}
        alt={alt}
      />
    </Box>
  );
};

export default ImageComponent;
