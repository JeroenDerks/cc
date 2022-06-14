import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";
import Link from "next/link";
import BaseLayout from "components/BaseLayout";
import { useCart, Item } from "react-use-cart";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import BorderBox from "components/BorderBox";
import Flex from "components/Flex";
import SeparatorLine from "components/SeparatorLine";
import DeleteIcon from "@mui/icons-material/Delete";

const Image = styled("img")({
  width: "100%",
});

const CartPage = () => {
  const { items, removeItem } = useCart();
  const [itemsInCart, setItemsInCart] = useState<Array<Item>>([]);

  useEffect(() => {
    setItemsInCart(items);
  }, [items]);

  if (itemsInCart.length < 1) {
    return (
      <BaseLayout>
        <BorderBox bx>
          <Typography variant="h4">Cart</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Your cart is empty
          </Typography>
        </BorderBox>
      </BaseLayout>
    );
  }

  const sum = itemsInCart.reduce((acc, { price }) => {
    return (acc += price);
  }, 0);

  return (
    <BaseLayout>
      <BorderBox bx>
        <Typography variant="h4">Cart</Typography>
        <SeparatorLine />
        <Stack>
          {itemsInCart.map(({ quantity, name, id, price }) => (
            <Grid container spacing={4} key={id}>
              <Grid item xs={12} sm={12} md={6}>
                <Image
                  src={`https://storage.googleapis.com/highlight_images/${id}_preview.jpg`}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Flex
                  height="100%"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography variant="h5">
                      {quantity} x {name}
                    </Typography>
                    <Typography variant="body2">{id}</Typography>
                  </Box>
                  <Flex mt={3} justifyContent="space-between" width={1}>
                    <Button
                      aria-label="delete item"
                      color="error"
                      variant="outlined"
                      size="small"
                      startIcon={<DeleteIcon fontSize="small" />}
                      onClick={() => removeItem(id)}
                    >
                      Delete
                    </Button>
                    <Typography variant="h6">
                      Price: {price * 0.01},00
                    </Typography>
                  </Flex>
                </Flex>
              </Grid>
              <SeparatorLine />
            </Grid>
          ))}
        </Stack>
        <Flex justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Total: {sum * 0.01},00</Typography>
          <Link href="/checkout" passHref>
            <Button
              component="a"
              variant="outlined"
              color="success"
              size="large"
            >
              Checkout
            </Button>
          </Link>
        </Flex>
      </BorderBox>
    </BaseLayout>
  );
};

export default CartPage;
