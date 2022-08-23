import React from "react";
import { IconButton, styled } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import theme from "theme";

const SwiperButton = styled(IconButton)({
  padding: 0,
  width: 40,
  height: 40,
  maxWidth: 40,
  minWidth: 40,
});

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
    <Wrapper width={1} justifyContent="space-between">
      <Box>
        <SwiperButton className="product-prev">
          <ChevronLeftIcon sx={{ fill: theme.palette.text.secondary }} />
        </SwiperButton>
        <SwiperButton className="product-next">
          <ChevronRightIcon sx={{ fill: theme.palette.text.secondary }} />
        </SwiperButton>
      </Box>
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
