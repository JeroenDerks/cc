import React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { MAX_WIDTH } from "utils/constants";
import { gridP, border } from "theme";

const OuterWrapper = styled(Box)(({ theme }) => ({
  width: "100vw",
  borderBottom: `1px solid ${theme.palette.divider}`,
  display: "flex",
  justifyContent: "center",
}));

const ContentWrapper = styled(Box)(
  ({ hideBorders }: { hideBorders: boolean }) => ({
    maxWidth: MAX_WIDTH,
    width: "100vw",
    flex: "0 0 100%",
    borderLeft: hideBorders ? "none" : border,
    borderRight: hideBorders ? "none" : border,
  })
);

const Section = ({
  children,
  hideSideBorders,
}: {
  children: React.ReactNode;
  hideSideBorders?: true;
}) => {
  return (
    <OuterWrapper px={gridP}>
      <ContentWrapper hideBorders={Boolean(hideSideBorders)}>
        {children}
      </ContentWrapper>
    </OuterWrapper>
  );
};

export default Section;
