import React from "react";
import { styled } from "@mui/material";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Wrapper = styled(Box)(({ theme }) => ({
  alignItems: "center",
  borderRadius: 4,
  border: `1px solid ${theme.palette.action.disabled}`,
  display: "flex",
  maxHeight: 56,
  minHeight: 56,
  padding: "0 16px",
}));

const AddToCart = ({
  addToCard,
  loading,
}: {
  addToCard: () => void;
  loading: boolean;
}) => {
  return (
    <Wrapper width={1} justifyContent="flex-end">
      <Button
        onClick={addToCard}
        variant="outlined"
        color="success"
        disabled={loading}
        id="add_to_cart"
      >
        Generate artwork
      </Button>
    </Wrapper>
  );
};

export default AddToCart;
