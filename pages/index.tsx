import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Hero from "components/Hero";
import Image from "next/image";
import Section from "components/Section";
import Typography from "@mui/material/Typography";
import officeBlack from "public/images/office_black.jpg";

const Index = () => {
  return (
    <>
      <Hero />
      <Section>
        <Grid container spacing={{ xs: 2, sm: 2, md: 4, lg: 10 }}>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              position="relative"
              width={1}
              height={{ xs: 400, sm: 400, md: 600, lg: 600 }}
            >
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
    </>
  );
};

export default Index;
