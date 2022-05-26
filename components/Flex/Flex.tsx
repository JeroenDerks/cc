import { Box } from "@mui/system";
import React from "react";
import { MarginProps } from "types";

type FlexDirection = "column" | "row";

type FlexProps = {
  flexDirection?: FlexDirection | FlexDirection[];
  justifyContent?: string | string[];
  alignItems?: string | string[];
  width?: number | number[] | string | string[];
  height?: string;
};
const Flex = ({
  children,
  ...rest
}: { children: React.ReactNode } & FlexProps & MarginProps) => {
  return (
    <Box display="flex" {...rest}>
      {children}
    </Box>
  );
};

export default Flex;
