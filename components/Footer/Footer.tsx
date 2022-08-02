import React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Flex from "components/Flex";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import LegalLink from "components/Link";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Section from "components/Section";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { gridP } from "theme";

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
            <Flex
              height="100%"
              justifyContent="space-between"
              flexDirection="column"
            >
              <Logo>CC</Logo>
              <Box display="flex" alignItems="center">
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
            </Flex>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Stack
              sx={{
                "& a": { marginBottom: "12px" },
                "& a:last-child": { marginBottom: "6px" },
              }}
            >
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
