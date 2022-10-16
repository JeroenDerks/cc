import React from "react";
import Section from "components/Section";
import { Box, Typography } from "@mui/material";
import { gridP } from "theme";

const Success = () => {
  return (
    <Section flexGrow={1}>
      <Box p={gridP}>
        <Typography variant="h3" paragraph>
          Oops, something went wrong.
        </Typography>
        <Typography variant="body1" gutterBottom>
          The checkout session has failed.
        </Typography>
        <Typography variant="body1">
          Please try again or contact our support if the issue persists.
        </Typography>
      </Box>
    </Section>
  );
};

export default Success;
1;
