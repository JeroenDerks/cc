import React from "react";
import { styled } from "@mui/material";
import BaseLayout from "components/BaseLayout";
import BorderBox from "components/BorderBox";
import Typography from "@mui/material/Typography";
import Flex from "components/Flex";
import SeparatorLine from "components/SeparatorLine";

const Logo = styled(Typography)(({ theme }) => ({
  "-webkit-text-stroke": theme.palette.text.primary,
  "-webkit-text-fill-color": theme.palette.background.default,
  "-webkit-text-stroke-width": "1px",
  fontSize: 400,
  lineHeight: 0.4,
  textDecoration: "none",
}));

const Hero = () => {
  return (
    <BaseLayout>
      <BorderBox py={10} bx fullWidth={true}>
        <Flex alignItems="center">
          <Logo>C</Logo>
          <Typography variant="h1" fontWeight={500} mt={-3.5} ml={-9}>
            Celebrate
          </Typography>
        </Flex>
        <Flex alignItems="center">
          <Logo>C</Logo>
          <Typography variant="h1" fontWeight={500} mt={-3.5} ml={-9}>
            Code
          </Typography>
        </Flex>
      </BorderBox>
      <SeparatorLine />
    </BaseLayout>
  );
};

export default Hero;
