import React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";

const Line = styled(Box)(({ theme }) => ({
  background: theme.palette.divider,
}));

const SeparatorLine = ({ disableMargin }: { disableMargin?: true }) => (
  <Line width={1} height="1px" my={disableMargin ? 0 : 8} />
);

export default SeparatorLine;
