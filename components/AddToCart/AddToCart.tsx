import React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";

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
      <LoadingButton
        onClick={addToCard}
        variant="outlined"
        color="success"
        loading={loading}
        id="add_to_cart"
      >
        Generate art work
      </LoadingButton>
    </Wrapper>
  );
};

export default AddToCart;
