import React from "react";
import Section from "components/Section";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { gridP } from "theme";
import { IconButton, styled, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LegalLink from "components/Link";
import Link from "next/link";

const Logo = styled(Typography)(({ theme }) => ({
  "-webkit-text-stroke": theme.palette.text.primary,
  "-webkit-text-fill-color": theme.palette.background.default,
  "-webkit-text-stroke-width": "1px",
  fontSize: 50,
  lineHeight: 1,
  textDecoration: "none",
}));

const Footer = () => {
  return (
    <Section>
      <Box p={gridP}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <Logo>CC</Logo>
            <Box mt={6}>
              <Link
                href="https://www.linkedin.com/company/celebrate-code/"
                passHref
              >
                <IconButton component="a" target="_blank">
                  <LinkedInIcon />
                </IconButton>
              </Link>

              <Typography>
                Copyright Ⓡ {new Date().getFullYear()}, Celebrate Code
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Stack>
              <LegalLink href="/legal-notice">Legal notice</LegalLink>
              <LegalLink href="/return-policy">Return policy</LegalLink>
              <LegalLink href="/privacy-policy">Privacy policy</LegalLink>
              <LegalLink href="/shipping-policy">Shipping policy</LegalLink>
              <LegalLink href="/terms-and-conditions">
                Terms and conditions
              </LegalLink>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};

export default Footer;
