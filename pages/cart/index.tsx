import React, { useEffect, useState } from "react";
import { useCart, Item } from "react-use-cart";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Flex from "components/Flex";
import SeparatorLine from "components/SeparatorLine";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";
import Section from "components/Section";
import ImageGallery from "components/ImageGallery";
import { border, gridP } from "theme";
import { sketchOptions } from "components/Panes/OutputPane";

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
        <Flex width={1} justifyContent="center">
          <Box width={1} my={5} minHeight="80vh">
            <Typography variant="h4">
              Are you a Picasso in Python or a Javascript da Vinci?
            </Typography>
            <Typography variant="body1" mt={2}>
              Get started{" "}
              <a href="/#editor" style={{ color: "#fff" }}>
                here
              </a>{" "}
              because your cart is empty.
            </Typography>
          </Box>
        </Flex>
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

    if (data.url) {
      router.push(data.url);
    }
    setLoading(false);
  };

  return (
    <Section>
      <Box p={gridP}>
        <Typography variant="h3">Your code is just a work of art</Typography>
      </Box>

      <SeparatorLine disableMargin />

      <Stack>
        {itemsInCart.map(({ id, price, theme, language, sketchId }) => (
          <React.Fragment key={id}>
            <Grid container key={id}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                p={gridP}
                sx={{ borderRight: { xs: "none", sm: "none", md: border } }}
              >
                <ImageGallery id={id} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} p={gridP}>
                <Flex
                  height="100%"
                  flexDirection="column"
                  justifyContent="flex-end"
                >
                  <Box>
                    <Typography variant="h5">Canvas 60 x 40 cm</Typography>
                    <Typography variant="body2">
                      <span>Langauge: </span>
                      {language.title}
                    </Typography>
                    <Typography variant="body2">
                      <span>Theme: </span>
                      {theme.title}
                    </Typography>
                    <Typography variant="body2">
                      <span>Sketch: </span>
                      {sketchOptions[parseInt(sketchId)].title}
                    </Typography>
                  </Box>
                  <Flex mt={3} justifyContent="space-between" width={1}>
                    <Typography variant="h6">
                      Price: € {price * 0.01},-
                    </Typography>
                    <Button
                      aria-label="delete item"
                      variant="text"
                      size="small"
                      startIcon={<DeleteIcon fontSize="small" />}
                      onClick={() => removeItem(id)}
                      sx={{ color: "#fff" }}
                    >
                      Delete
                    </Button>
                  </Flex>
                </Flex>
              </Grid>
            </Grid>

            <SeparatorLine disableMargin />
          </React.Fragment>
        ))}
      </Stack>

      <Grid container>
        <Grid item xs={0} sm={0} md={6} />
        <Grid item xs={12} sm={12} md={6}>
          <Flex justifyContent="space-between" alignItems="center" p={gridP}>
            <Typography variant="h5">Total: € {sum * 0.01},-</Typography>
            <Button
              onClick={handleCheckout}
              variant="contained"
              color="success"
              size="large"
              disabled={loading}
            >
              Checkout
            </Button>
          </Flex>
        </Grid>
      </Grid>
    </Section>
  );
};

export default CartPage;
