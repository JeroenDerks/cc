import React from "react";
import { styled, Typography } from "@mui/material";

const LogoComponent = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  fontSize: 18,
  lineHeight: 1,
  textDecoration: "none",
}));

export const Logo = ({ as }: { as?: "a" }) => (
  <LogoComponent as={as}>
    Celebrate <br />
    Code
  </LogoComponent>
);
