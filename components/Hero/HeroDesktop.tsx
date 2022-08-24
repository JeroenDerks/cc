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

const HeroDesktop = () => {
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
          justifyContent="center"
          width={1}
          sx={{ zIndex: 1, height: { md: "80vh", lg: "70vh" } }}
          flexDirection="column"
          py={{ md: 10, lg: 10 }}
          px={gridP}
        >
          <Box maxWidth={420} mb={1}>
            <Typography variant="h1" fontWeight={800} color="#000">
              Celebrate great code
            </Typography>
          </Box>
          <Box maxWidth={420}>
            <Typography variant="body1" color="#000" mb={2} fontSize={20}>
              Inspire your tech team by visualizing the best code practices for
              your office.
            </Typography>
            <Link href="#editor" passHref>
              <StartButton variant="contained">Paste your code</StartButton>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeroDesktop;
