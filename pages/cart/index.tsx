import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";
import { useCart, Item } from "react-use-cart";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Flex from "components/Flex";
import SeparatorLine from "components/SeparatorLine";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";
import Section from "components/Section";

const Image = styled("img")({
  width: "100%",
});

const CartPage = () => {
  const { items, removeItem } = useCart();
  const [itemsInCart, setItemsInCart] = useState<Array<Item>>([]);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setItemsInCart(items);
  }, [items]);

  if (itemsInCart.length < 1) {
    return (
      <Section>
        <Typography variant="h4">Cart</Typography>
        <Typography variant="subtitle1" gutterBottom>
          Your cart is empty
        </Typography>
      </Section>
    );
  }

  const sum = itemsInCart.reduce((acc, { price }) => {
    return (acc += price);
  }, 0);

  const handleCheckout = async () => {
    setLoading(true);

    const request = await fetch("/api/create-checkout-session", {
      method: "POST",
      body: JSON.stringify({ items: itemsInCart }),
    });
    const data = await request.json();
    console.log(data);
    if (data.url) {
      router.push(data.url);
    }
    setLoading(false);
  };

  return (
    <Section>
      <Flex width={1} justifyContent="center">
        <Box maxWidth={880} width={1}>
          <Typography variant="h3" mt={5}>
            Cart
          </Typography>
        </Box>
      </Flex>
      <SeparatorLine />
      <Stack>
        {itemsInCart.map(({ quantity, name, id, price }) => (
          <>
            <Flex width={1} justifyContent="center">
              <Box maxWidth={880}>
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
                </Grid>
              </Box>
            </Flex>
            <SeparatorLine />
          </>
        ))}
      </Stack>
      <Flex justifyContent="center" width={1}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxWidth={880}
          width={1}
          mb={10}
        >
          <Typography variant="h5">Total: {sum * 0.01},00</Typography>
          <Button
            onClick={handleCheckout}
            variant="outlined"
            color="success"
            size="large"
            disabled={loading}
          >
            Checkout
          </Button>
        </Flex>
      </Flex>
    </Section>
  );
};

export default CartPage;
