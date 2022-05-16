import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { useCart, Item } from "react-use-cart";

const Wrapper = styled(Box)(({ theme }) => ({
  alignItems: "center",
  borderBottom: `1px solid ${theme.palette.action.disabled}`,
  maxHeight: 56,
  minHeight: 56,
  padding: "8px 32px",
  width: "100%",
}));

const CheckoutLink = styled("a")(({ theme }) => ({
  border: `1px solid ${theme.palette.action.disabled}`,
  width: 42,
  height: 42,
  lineHeight: 2.4,
  borderRadius: "50%",
  textDecoration: "none",
  textAlign: "center",
  color: theme.palette.text.primary,
}));

const Header = () => {
  const { items } = useCart();
  const [itemsInCart, setItemsInCart] = useState<Array<Item>>([]);

  useEffect(() => {
    setItemsInCart(items);
  }, [items]);

  return (
    <Wrapper>
      <Box
        maxWidth={1800}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        height="100%"
      >
        <CheckoutLink href="checkout">{itemsInCart.length}</CheckoutLink>
      </Box>
    </Wrapper>
  );
};

export default Header;
