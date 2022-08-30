import React from "react";
import { IconButton, styled } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Flex from "components/Flex";

const SwiperButton = styled(IconButton)({
  padding: 0,
  width: 40,
  height: 40,
  maxWidth: 40,
  minWidth: 40,
});

const Wrapper = styled(Box)(({ theme }) => ({
  alignItems: "center",
  border: `1px solid ${theme.palette.action.disabled}`,
  borderRadius: 4,
  display: "flex",
  justifyContent: "flex-end",
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
      <Flex alignItems="center" justifyContent="center">
        <Typography variant="h4" mr={2}>
          € 69,-
        </Typography>
        <Button
          onClick={addToCard}
          variant="outlined"
          color="success"
          disabled={loading}
          id="add_to_cart"
        >
          Add to cart
        </Button>
      </Flex>
    </Wrapper>
  );
};

export default AddToCart;
