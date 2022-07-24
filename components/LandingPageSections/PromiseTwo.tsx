import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Section from "components/Section";
import Typography from "@mui/material/Typography";
import teamWork from "public/images/office_teamwork.jpg";
import theme, { gridP } from "theme";

const PromiseOne = () => {
  return (
    <Section>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          p={gridP}
          sx={{ borderRight: `1px solid ${theme.palette.divider}` }}
        >
          <Box position="relative" height={420}>
            <Image
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              src={teamWork}
              alt="Teamwork"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          p={gridP}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box py={3} maxWidth={600}>
            <Typography variant="h3" gutterBottom>
              Celebrate your team's achievements
            </Typography>
            <Typography variant="body1" gutterBottom>
              • Got a piece piece of code you're very proud of?
            </Typography>
            <Typography variant="body1" gutterBottom>
              • Did your team deliver on a huge milestone?
            </Typography>
            <Typography variant="body1" gutterBottom>
              • Want to show your appreciation for your team's efforts?
            </Typography>
            <Typography variant="body1" gutterBottom>
              • Got anyone to thank for their contribution to your cause?
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};

export default PromiseOne;
