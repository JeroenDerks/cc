import React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import HeroImage from "public/images/hero.jpg";
import Link from "next/link";
import { MAX_WIDTH } from "utils/constants";
import Flex from "components/Flex";
import { gridP } from "theme";

const StartButton = styled(Button)({
  background: "#000",
  color: "#fff",
  textDecoration: "none",
  padding: `8px 16px`,
});

const Hero = () => {
  return (
    <Box width={1} left={0} position="relative">
      <Image
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        src={HeroImage}
        alt="hero"
      />

      <Flex justifyContent="center" px={gridP}>
        <Flex
          maxWidth={MAX_WIDTH}
          width={1}
          sx={{
            zIndex: 1,
            height: { xs: "100vh", sm: "100vh", md: "80vh", lg: "70vh" },
            justifyContent: {
              xs: "space-between",
              sm: "space-between",
              md: "center",
            },
          }}
          flexDirection="column"
          py={{ xs: 16, sm: 16, md: 10, lg: 10 }}
          pt={{ xs: 12, sm: 12, md: 0, lg: 0 }}
          px={gridP}
        >
          <Box maxWidth={420} mb={1}>
            <Typography variant="h1" fontWeight={800} color="#000">
              Turn your team's code into art
            </Typography>
          </Box>
          <Box maxWidth={420}>
            <Typography variant="body1" color="#000" mb={2}>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Cras ultricies ligula sed magna dictum porta. Sed porttitor
              lectus nibh. Vivamus suscipit tortor eget felis porttitor
              volutpat.
            </Typography>
            <Link href="#editor" passHref>
              <StartButton variant="contained">Create art</StartButton>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;
