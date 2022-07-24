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
          <Box position="relative" height={420}>
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
              Promote code documentation
            </Typography>
            <Typography variant="body1" paragraph>
              Testing and commenting code is not the most exciting part of a dev
              job. Yet our future selfs and our team mates benefit heavily from
              properly documented code.
            </Typography>
            <Typography variant="body1">
              If testing and commenting is important to you, then show it on
              your skin.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};

export default PromiseOne;
