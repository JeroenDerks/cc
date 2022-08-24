import React from "react";
import Grid from "@mui/material/Grid";
import Section from "components/Section";
import Typography from "@mui/material/Typography";
import { gridP, border } from "theme";
import Image from "next/image";
import artworkIcon from "public/images/icon_artwork.png";
import screenIcon from "public/images/icon_screen.png";
import themeIcon from "public/images/icon_theme.png";

const steps = [
  {
    heading: "1. Paste your code",
    body: "Find that genius piece of code and paste it in the editor below.",
    icon: screenIcon,
    imageAlt: "Step 1 - paste code",
  },
  {
    heading: "2. Pick your poison",
    body: " Select your favourite IDE theme, and the language in which you write your magic.",
    icon: themeIcon,
    imageAlt: "Step 2 - choose theme",
  },
  {
    heading: "3. Get your artwork",
    body: " Sit back and relax while we create a work of art from your source code.",
    icon: artworkIcon,
    imageAlt: "Step 3 - get art",
  },
];

const GridOuterItem = ({ children }: { children: React.ReactNode[] }) => (
  <Grid
    item
    container
    xs={12}
    sm={12}
    md={4}
    p={gridP}
    py={{ ...gridP, xs: 4, sm: 4 }}
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
        {steps.map(({ icon, heading, body, imageAlt }) => (
          <GridOuterItem key={heading}>
            <Grid item xs={2} sm={3} md={12} mb={4} pr={2}>
              <Image alt={imageAlt} src={icon} height={54} width={80} />
            </Grid>
            <Grid item xs={10} sm={9} md={12}>
              <Typography variant="h4" gutterBottom>
                {heading}
              </Typography>
              <Typography variant="body1">{body}</Typography>
            </Grid>
          </GridOuterItem>
        ))}
      </Grid>
    </Section>
  );
};

export default HowItWorks;
