import React from "react";
import Box from "@mui/material/Box";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box display="flex" justifyContent="center" p={2}>
      <Box maxWidth={1280}>{children}</Box>
    </Box>
  );
};

export default BaseLayout;
