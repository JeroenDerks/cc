import { Box } from "@mui/system";
import React from "react";
import { MarginProps } from "types";

type FlexDirection = "column" | "row";
type PaddingProp = { xs?: number; sm?: number; md?: number; lg?: number };
type FlexProps = {
  flexDirection?: FlexDirection | FlexDirection[];
  justifyContent?: string | string[];
  alignItems?: string | string[];
  width?: number | number[] | string | string[];
  height?: string;
  minHeight?: string;
  p?: PaddingProp;
  px?: PaddingProp;
  pt?: PaddingProp;
  py?: PaddingProp;
  maxWidth?: number;
  sx?: any;
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
