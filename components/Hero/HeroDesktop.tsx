import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import HeroImage from "public/images/hero.jpg";
import Link from "next/link";
import { MAX_WIDTH } from "utils/constants";
import Flex from "components/Flex";
import { gridP } from "theme";
import { HeroCopyProps } from "./Hero";
import { HeroButton } from "./styled";

const HeroDesktop = ({ copy }: { copy: HeroCopyProps }) => {
  const { body, heading, buttonText } = copy;

  return (
    <Box width={1} left={0} position="relative">
      <Image
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        src={HeroImage}
        alt="hero"
        width={2048}
        height={1365}
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
              {heading}
            </Typography>
          </Box>
          <Box maxWidth={420}>
            <Typography variant="body1" color="#000" mb={2} fontSize={20}>
              {body}
            </Typography>
            <Link href="#editor" passHref>
              <HeroButton variant="contained">{buttonText}</HeroButton>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeroDesktop;
