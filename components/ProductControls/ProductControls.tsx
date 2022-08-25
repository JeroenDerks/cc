import React from "react";
import { IconButton, styled } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import theme from "theme";
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
  justifyContent: "space-between",
  maxHeight: 56,
  minHeight: 56,
  padding: "0 16px",
}));

const ProductControls = ({
  addToCard,
  loading,
}: {
  addToCard: () => void;
  loading: boolean;
}) => {
  return (
    <Wrapper>
      <Box>
        <SwiperButton className="product-prev">
          <ChevronLeftIcon sx={{ fill: theme.palette.text.secondary }} />
        </SwiperButton>
        <SwiperButton className="product-next">
          <ChevronRightIcon sx={{ fill: theme.palette.text.secondary }} />
        </SwiperButton>
      </Box>

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

export default ProductControls;
