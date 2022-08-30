import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Section from "components/Section";
import Typography from "@mui/material/Typography";
import sizeDetail from "public/images/artwork_scale.jpg";
import hangDetail1 from "public/images/hang_detail_1.jpg";
import hangDetail2 from "public/images/hang_detail_2.jpg";
import { gridP, border } from "theme";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const details = [
  {
    heading: "Easy to mount",
    body: "You are all engineers, and the artwork ships with everything you'll need...",
    image: hangDetail1,
    imageAlt: "Mounting details",
  },
  {
    heading: "Large frame for large impact",
    body: "With its dimensions of 60 x 40 centimeter, this piece of art will surely turn some heads.",
    image: sizeDetail,
    imageAlt: "Artwork dimensions",
  },
  {
    heading: "Made of high quality canvas",
    body: "The artworks are created on the industry's best canvas material",
    image: hangDetail2,
    imageAlt: "High quality canvas",
  },
];
const ProductDetails = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Section>
      <Grid container>
        {details.map(({ heading, body, image, imageAlt }) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            px={gridP}
            py={4}
            borderRight={{ xs: "none", sm: "none", md: border }}
            key={heading}
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                {heading}
              </Typography>
              <Typography variant="body1" mb={2}>
                {body}
              </Typography>
              <Image
                objectFit="cover"
                placeholder="blur"
                src={image}
                alt={imageAlt}
                width={isMobile ? 800 : 600}
                height={isMobile ? 400 : 437}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default ProductDetails;
