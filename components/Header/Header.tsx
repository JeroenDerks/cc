import React, { useEffect, useState } from "react";
import Link from "next/link";
import { styled, Typography } from "@mui/material";
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

const Logo = styled(Typography)(({ theme }) => ({
  "-webkit-text-stroke": theme.palette.text.primary,
  "-webkit-text-fill-color": theme.palette.background.default,
  "-webkit-text-stroke-width": "1px",
  fontSize: 40,
  lineHeight: 1,
  textDecoration: "none",
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
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <Link href="/" passHref>
          <Logo as="a">CC</Logo>
        </Link>
        <CheckoutLink href="/cart">{itemsInCart.length}</CheckoutLink>
      </Box>
    </Wrapper>
  );
};

export default Header;
