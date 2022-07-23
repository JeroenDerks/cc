import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Section from "components/Section";
import Typography from "@mui/material/Typography";
import officeBlack from "public/images/office_black.jpg";
import { gridP, border } from "theme";

const PromiseOne = () => {
  return (
    <Section>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} p={gridP} borderRight={border}>
          <Box position="relative" height={500}>
            <Image
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              src={officeBlack}
              alt="Office"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          p={gridP}
          borderRight={border}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box py={3} maxWidth={600}>
            <Typography variant="h3" gutterBottom>
              No more faceless offices
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

export default PromiseOne;
