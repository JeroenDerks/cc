import React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Flex from "components/Flex";

const Wrapper = styled(Box)(({ theme }) => ({
  alignItems: "center",
  border: `1px solid ${theme.palette.action.disabled}`,
  borderRadius: 4,
  display: "flex",
  justifyContent: "space-between",
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
    <Wrapper>
      <Typography variant="h4" mr={2} fontWeight={300}>
        Price: € 69,-
      </Typography>
      <Button
        onClick={addToCard}
        variant="outlined"
        color="success"
        disabled={loading}
        id="add_to_cart"
      >
        Generate art work
      </Button>
    </Wrapper>
  );
};

export default AddToCart;
