import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "components/Image";
import Section from "components/Section";
import Typography from "@mui/material/Typography";
import hangDetail1 from "public/images/hang_detail_1.jpg";
import hangDetail2 from "public/images/hang_detail_2.jpg";
import { gridP, border } from "theme";

const ProductDetails = () => {
  return (
    <Section>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} p={gridP} borderRight={border}>
          <Box>
            <Image height={320} src={hangDetail1} alt="Hang detail 1" />

            <Typography variant="h4" gutterBottom>
              Drop your best code
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} p={gridP} borderRight={border}>
          <Box>
            <Image height={320} src={hangDetail2} alt="Hang detail 2" />
            <Typography variant="h4" gutterBottom>
              Drop your best code
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} p={gridP} borderRight={border}>
          <Box>
            <Image height={320} src={hangDetail1} alt="Hang detail 3" />
            <Typography variant="h4" gutterBottom>
              Drop your best code
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};

export default ProductDetails;
