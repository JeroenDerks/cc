import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "components/Image";
import Section from "components/Section";
import Typography from "@mui/material/Typography";
import sizeDetail1 from "public/images/size_detail_1.jpg";
import hangDetail1 from "public/images/hang_detail_1.jpg";
import hangDetail2 from "public/images/hang_detail_2.jpg";
import { gridP, border } from "theme";

const details = [
  {
    heading: "Made of high quality canvas",
    body: "The artworks are created on the industry's best canvas material",
    image: hangDetail1,
    imageAlt: "High quality canvas",
  },
  {
    heading: "Large frame for large impact",
    body: "With its dimensions of 60 x 40 centimeter, this piece of art will surely turn some heads.",
    image: sizeDetail1,
    imageAlt: "Artwork dimensions",
  },
  {
    heading: "Easy to mount",
    body: "You are all engineers, and the artwork ships with everything you'll need...",
    image: hangDetail2,
    imageAlt: "Mounting details",
  },
];
const ProductDetails = () => {
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
                height={{ xs: 200, sm: 240, md: 320 }}
                src={image}
                alt={imageAlt}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default ProductDetails;
