import React from "react";
import { styled } from "@mui/material";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Wrapper = styled(Box)(({ theme }) => ({
  alignItems: "center",
  borderRadius: 4,
  border: `1px solid ${theme.palette.action.disabled}`,
  display: "flex",
  maxHeight: 56,
  minHeight: 56,
  padding: "0 16px",
}));

const AddToCart = ({ addToCard }: { addToCard: () => void }) => {
  return (
    <Wrapper width={1} justifyContent="space-between">
      <Typography variant="h5">Price: 69,00</Typography>
      <Button onClick={addToCard} variant="contained">
        Get me that
      </Button>
    </Wrapper>
  );
};

export default AddToCart;
