import React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { MAX_WIDTH } from "utils/constants";

const OuterWrapper = styled(Box)(({ theme }) => ({
  width: "100vw",
  borderBottom: `1px solid ${theme.palette.divider}`,
  display: "flex",
  justifyContent: "center",
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  maxWidth: MAX_WIDTH,
  width: "100vw",
  flex: "0 0 100%",
  borderLeft: `1px solid ${theme.palette.divider}`,
  borderRight: `1px solid ${theme.palette.divider}`,
}));

const defaultPadding = { xs: 2, sm: 2, md: 3, lg: 6 };
const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <OuterWrapper p={2}>
      <ContentWrapper p={defaultPadding}>{children}</ContentWrapper>
    </OuterWrapper>
  );
};

export default Section;
