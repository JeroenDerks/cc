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

const ProductDetails = () => {
  return (
    <Section>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} p={gridP} borderRight={border}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Huge frame for huge impact
            </Typography>
            <Typography variant="body1" mb={2}>
              With its dimensions of 60 x 40 centimeter, this piece of art will
              surely turn some heads.
            </Typography>
            <Image height={320} src={sizeDetail1} alt="Hang detail 1" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} p={gridP} borderRight={border}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Made of high quality canvas
            </Typography>
            <Typography variant="body1" mb={2}>
              The artworks are created on the industry's best canvas material
            </Typography>
            <Image height={320} src={hangDetail1} alt="Hang detail 2" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} p={gridP} borderRight={border}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Easy to mount
            </Typography>
            <Typography variant="body1" mb={2}>
              You are all engineers, and the artwork ships with everything
              you'll need...
            </Typography>
            <Image height={320} src={hangDetail2} alt="Hang detail 3" />
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};

export default ProductDetails;
