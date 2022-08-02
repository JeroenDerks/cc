import React from "react";
import { styled } from "@mui/material";
import Link from "next/link";

const StyledLink = styled("a")(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  marginBottom: 12,
  "&:hover": {
    textDecoration: "underline",
  },
}));

const LinkComponent = ({
  children,
  href,
  target,
}: {
  children: React.ReactNode;
  href: string;
  target?: string;
}) => (
  <Link href={href} passHref>
    <StyledLink target={target}>{children}</StyledLink>
  </Link>
);

export default LinkComponent;
