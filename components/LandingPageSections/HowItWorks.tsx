import React from "react";
import Grid from "@mui/material/Grid";
import Section from "components/Section";
import Typography from "@mui/material/Typography";
import { gridP, border } from "theme";
import Image from "next/image";
import artworkIcon from "public/images/icon_artwork.png";
import screenIcon from "public/images/icon_screen.png";
import themeIcon from "public/images/icon_theme.png";

const GridOuterItem = ({ children }: { children: React.ReactNode[] }) => (
  <Grid
    item
    container
    xs={12}
    sm={12}
    md={4}
    p={gridP}
    pt={{ ...gridP, xs: 4, sm: 4 }}
    sx={{
      borderRight: { xs: "none", sm: "none", md: border },
      borderBottom: { xs: border, sm: border, md: "none" },
    }}
  >
    {children}
  </Grid>
);

const HowItWorks = () => {
  return (
    <Section>
      <Grid container>
        <GridOuterItem>
          <Grid item xs={3} sm={3} md={12} mb={4}>
            <Image alt="theme" src={screenIcon} height={68} width={100} />
          </Grid>
          <Grid item xs={9} sm={9} md={12}>
            <Typography variant="h4" gutterBottom>
              1. Paste your code
            </Typography>
            <Typography variant="body1">
              Find that genius piece of code and paste it in the editor below.
            </Typography>
          </Grid>
        </GridOuterItem>
        <GridOuterItem>
          <Grid item xs={3} sm={3} md={12} mb={4}>
            <Image alt="theme" src={themeIcon} height={68} width={100} />
          </Grid>
          <Grid item xs={9} sm={9} md={12}>
            <Typography variant="h4" gutterBottom>
              2. Pick your poison
            </Typography>
            <Typography variant="body1">
              Select your favourite IDE theme, and the language in which you
              write your magic.
            </Typography>
          </Grid>
        </GridOuterItem>
        <GridOuterItem>
          <Grid item xs={3} sm={3} md={12} mb={4}>
            <Image alt="theme" src={artworkIcon} height={68} width={100} />
          </Grid>
          <Grid item xs={9} sm={9} md={12}>
            <Typography variant="h4" gutterBottom>
              3. Get your artwork
            </Typography>
            <Typography variant="body1">
              Sit back and relax while we create a work of art from your source
              code.
            </Typography>
          </Grid>
        </GridOuterItem>
      </Grid>
    </Section>
  );
};

export default HowItWorks;
