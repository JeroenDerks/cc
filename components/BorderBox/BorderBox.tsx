import React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import theme from "theme";
import { MarginProps, BorderProps, PaddingProps } from "types";

type BorderBoxProps = {
  fullWidth?: true;
};

const border = `1px solid ${theme.palette.divider}`;

const BorderBoxComponent = styled(Box)`
  border-left: ${({ bl, bx, b }: BorderProps) => (bl || bx || b) && border};
  border-right: ${({ br, bx, b }: BorderProps) => (br || bx || b) && border};
  border-top: ${({ bt, by, b }: BorderProps) => (bt || by || b) && border};
  border-bottom: ${({ bb, by, b }: BorderProps) => (bb || by || b) && border};
`;

const BorderBox = ({
  children,
  fullWidth,
  ...rest
}: {
  children?: React.ReactNode;
  maxWidth?: number;
} & BorderProps &
  PaddingProps &
  MarginProps &
  BorderBoxProps) => {
  return (
    <BorderBoxComponent
      px={[4, 6, 10]}
      py={5}
      width={fullWidth ? 880 : 1}
      maxWidth={880}
      {...rest}
    >
      {children}
    </BorderBoxComponent>
  );
};

export default BorderBox;
