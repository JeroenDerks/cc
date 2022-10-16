import React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { MAX_WIDTH } from "utils/constants";
import { border } from "theme";
import theme from "theme";
const OuterWrapper = styled(Box)(({ flexGrow }: { flexGrow?: number }) => ({
  width: "100vw",
  borderBottom: `1px solid ${theme.palette.divider}`,
  display: "flex",
  justifyContent: "center",
  flexGrow: flexGrow,
}));

const ContentWrapper = styled(Box)(
  ({ hideBorders }: { hideBorders: boolean }) => ({
    maxWidth: MAX_WIDTH,
    minWidth: 0,
    width: "100vw",
    flex: "0 0 100%",
    borderLeft: hideBorders ? "none" : border,
    borderRight: hideBorders ? "none" : border,
  })
);

const Section = ({
  children,
  flexGrow,
  hideSideBorders,
  id,
  sx,
}: {
  children: React.ReactNode;
  flexGrow?: number;
  hideSideBorders?: true;
  id?: string;
  sx?: any;
}) => {
  return (
    <OuterWrapper
      px={{ xs: 1, sm: 1, md: 4, lg: 10 }}
      id={id}
      sx={sx}
      flexGrow={flexGrow}
    >
      <ContentWrapper hideBorders={Boolean(hideSideBorders)}>
        {children}
      </ContentWrapper>
    </OuterWrapper>
  );
};

export default Section;
