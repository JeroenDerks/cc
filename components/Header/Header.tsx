import React, { useEffect, useState } from "react";
import Link from "next/link";
import { styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useCart, Item } from "react-use-cart";
import Badge from "@mui/material/Badge";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { NAVBAR_HEIGHT } from "utils/constants";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  borderBottom: `1px solid ${theme.palette.action.disabled}`,
  maxHeight: NAVBAR_HEIGHT,
  minHeight: NAVBAR_HEIGHT,
}));

const CheckoutLink = styled("div")(({ theme }) => ({
  border: `1px solid ${theme.palette.action.disabled}`,
  cursor: "pointer",
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
    <Wrapper px={{ xs: 2, sm: 2, md: 4 }} py={1}>
      <Box
        maxWidth={1800}
        width={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <Link href="/" passHref>
          <Logo as="a">CC</Logo>
        </Link>
        <CheckoutLink>
          <Link href="/cart">
            <Badge badgeContent={itemsInCart.length} color="success">
              <ShoppingCartRoundedIcon color="action" fontSize="small" />
            </Badge>
          </Link>
        </CheckoutLink>
      </Box>
    </Wrapper>
  );
};

export default Header;
