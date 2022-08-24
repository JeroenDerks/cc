import React from "react";
import Box from "@mui/material/Box";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

const Hero = () => {
  return (
    <>
      <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <HeroDesktop />
      </Box>
      <Box display={{ xs: "block", sm: "block", md: "none" }}>
        <HeroMobile />
      </Box>
    </>
  );
};

export default Hero;
