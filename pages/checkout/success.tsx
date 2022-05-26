import React from "react";
import BaseLayout from "components/BaseLayout";
import BorderBox from "components/BorderBox";
import { Box, Typography } from "@mui/material";

const Success = () => {
  return (
    <BaseLayout>
      <BorderBox bx mb={5}>
        <Box width={1}>
          <Typography variant="h4">Congrats</Typography>
        </Box>
      </BorderBox>
    </BaseLayout>
  );
};

export default Success;
1;
