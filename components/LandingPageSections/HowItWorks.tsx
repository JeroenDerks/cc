import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Section from "components/Section";
import Typography from "@mui/material/Typography";
import { gridP, border } from "theme";

const HowItWorks = () => {
  return (
    <Section>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} p={gridP} borderRight={border}>
          <Box>
            <Box width={120} height={120} border="1px solid white" mb={3} />
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
            <Box width={120} height={120} border="1px solid white" mb={3} />
            <Typography variant="h4" gutterBottom>
              Choose your favorite theme
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} p={gridP} borderRight={border}>
          <Box>
            <Box width={120} height={120} border="1px solid white" mb={3} />
            <Typography variant="h4" gutterBottom>
              Get your artwork
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
