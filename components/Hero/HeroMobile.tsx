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
import { HeroCopyProps } from "./Hero";

const StartButton = styled(Button)({
  background: "#fff",
  color: "#000",
  textDecoration: "none",
  padding: `8px 16px`,
});

const HeroMobile = ({ copy }: { copy: HeroCopyProps }) => {
  const { body, heading, buttonText } = copy;
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
            <Typography variant="h1" fontWeight={800} gutterBottom>
              {heading}
            </Typography>

            <Typography
              variant="body1"
              mb={3}
              fontSize={{ xs: 18, sm: 18, md: 20 }}
            >
              {body}
            </Typography>
            <Link href="#editor" passHref>
              <StartButton variant="contained">{buttonText}</StartButton>
            </Link>
          </Box>
        </Box>
      </Section>
    </>
  );
};

export default HeroMobile;
