import React from "react";
import Section from "components/Section";
import { Box, Typography } from "@mui/material";
import { gridP } from "theme";

const LegalNotice = () => {
  return (
    <Section flexGrow={1}>
      <Box maxWidth={880} p={gridP}>
        <Typography variant="h2" paragraph>
          Legal notice
        </Typography>
        <Typography variant="h4" paragraph mt={6}>
          Information according to § 5 TMG:
        </Typography>
        <Typography paragraph>
          Ruta Beniusyte E-commerce
          <br />
          Warschauerstr. 17,
          <br />
          10243, Berlin
          <br />
        </Typography>

        <Typography variant="h4" paragraph mt={6}>
          VAT
        </Typography>
        <Typography paragraph>
          VAT identification number according to §27 a of the German Value Added
          Tax Act:
          <br />
          DE 81 54 58 230
        </Typography>

        <Typography variant="h4" paragraph mt={6}>
          Contact
        </Typography>
        <Typography>E-Mail: hi@celebratecode.com</Typography>
        <Typography paragraph>Web: www.celebratecode.com</Typography>

        <Typography variant="h4" paragraph mt={6}>
          Dispute resolution
        </Typography>
        <Typography paragraph>
          The European Commission provides a platform for online dispute
          resolution (OS): https://ec.europa.eu/consumers/odr
        </Typography>

        <Typography variant="h4" paragraph mt={6}>
          Responsible for content
        </Typography>
        <Typography>Ruta Beniusyte, Jeroen Derks</Typography>
        <Typography variant="h4" paragraph mt={6}>
          Website
        </Typography>
        <Typography>Jeroen Derks</Typography>
      </Box>
    </Section>
  );
};

export default LegalNotice;
