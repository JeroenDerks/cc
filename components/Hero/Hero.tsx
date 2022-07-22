import React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import HeroImage from "public/images/hero.jpg";
import Link from "next/link";
import { MAX_WIDTH } from "utils/constants";

const StartButton = styled(Button)({
  background: "#000",
  color: "#fff",
  textDecoration: "none",
  padding: `8px 16px`,
});

const heightOfHeader = 56;
const Hero = () => {
  return (
    <Box
      position="absolute"
      top={heightOfHeader}
      width={1}
      left={0}
      height={{ xs: "100%", sm: "100%", md: "80%", lg: "70%" }}
    >
      <Image
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        src={HeroImage}
        alt="hero"
      />

      <Box
        maxWidth={MAX_WIDTH}
        width={1}
        zIndex={1}
        height="100%"
        display="flex"
        border="1px solid red"
        position="relative"
        sx={{ pt: { xs: 0, sm: 0, md: "10%" } }}
      >
        <Box p={4} sx={{ width: { xs: "100%", sm: "100%", md: "42%" } }}>
          <Typography variant="h1" fontSize={32} fontWeight={800} color="#000">
            Turn your team's code into art
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Typography variant="body1" fontSize={16} color="#000" mb={2}>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Cras ultricies ligula sed magna dictum porta. Sed porttitor
              lectus nibh. Vivamus suscipit tortor eget felis porttitor
              volutpat.
            </Typography>
            <Link href="#editor" passHref>
              <StartButton variant="contained">Create art</StartButton>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
