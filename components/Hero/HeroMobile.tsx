import React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import HeroImage from "public/images/hero.jpg";
import Link from "next/link";
import Section from "components/Section";
import { gridP } from "theme";
import { NAVBAR_HEIGHT } from "utils/constants";

const StartButton = styled(Button)({
  background: "#fff",
  color: "#000",
  textDecoration: "none",
  padding: `8px 16px`,
});

const HeroMobile = () => {
  return (
    <>
      <Box width={1} left={0} position="relative" height="65vh">
        <Image
          objectFit="cover"
          placeholder="blur"
          layout="fill"
          src={HeroImage}
          alt="hero"
        />
      </Box>
      <Section>
        <Box
          px={gridP}
          py={6}
          minHeight={`calc(35vh - ${NAVBAR_HEIGHT}px)`}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box>
            <Typography variant="h1" fontWeight={800}>
              Celebrate great code
            </Typography>

            <Typography variant="body1" mb={2} fontSize={20}>
              Inspire your tech team by visualizing the best code practices for
              your office.
            </Typography>
            <Link href="#editor" passHref>
              <StartButton variant="contained">Paste your code</StartButton>
            </Link>
          </Box>
        </Box>
      </Section>
    </>
  );
};

export default HeroMobile;
