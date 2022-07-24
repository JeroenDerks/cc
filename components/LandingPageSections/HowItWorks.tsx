import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Section from "components/Section";
import Typography from "@mui/material/Typography";
import { gridP, border } from "theme";
import Image from "next/image";
import artworkIcon from "public/images/icon_artwork.png";
import screenIcon from "public/images/icon_screen.png";
import themeIcon from "public/images/icon_theme.png";

const HowItWorks = () => {
  return (
    <Section>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} p={gridP} borderRight={border}>
          <Box>
            <Image alt="theme" src={screenIcon} height={68} width={100} />
            <Typography variant="h4" gutterBottom mt={4}>
              1. Paste your code
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} p={gridP} borderRight={border}>
          <Box>
            <Image alt="theme" src={themeIcon} height={68} width={100} />
            <Typography variant="h4" gutterBottom mt={4}>
              2. Choose your theme and language
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} p={gridP} borderRight={border}>
          <Box>
            <Image alt="theme" src={artworkIcon} height={68} width={100} />
            <Typography variant="h4" gutterBottom mt={4}>
              3. Get your artwork
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};

export default HowItWorks;