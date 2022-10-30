import React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

export type HeroCopyProps = {
  heading: string;
  body: string;
  buttonText: string;
};
const copy = {
  heading: "Celebrate your code",
  body: "Inspire your tech team by visualizing the best code practices for your office.",
  buttonText: "Paste your code",
};

const HeroButton = styled(Button)({
  background: "#fff",
  color: "#000",
  textDecoration: "none",
  padding: `8px 16px`,
});

const Hero = () => {
  return (
    <>
      <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <HeroDesktop copy={copy} />
      </Box>
      <Box display={{ xs: "block", sm: "block", md: "none" }}>
        <HeroMobile copy={copy} />
      </Box>
    </>
  );
};

export default Hero;
