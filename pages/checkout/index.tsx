import React from "react";
import BaseLayout from "components/BaseLayout";
import { useCart } from "react-use-cart";
import { Typography } from "@mui/material";
import { ShoppingCartItem } from "types";

const CheckoutPage = () => {
  const { isEmpty, items, updateItemQuantity, removeItem } = useCart();

  console.log(items);
  if (isEmpty)
    return (
      <BaseLayout>
        <p>Your cart is empty</p>
      </BaseLayout>
    );

  return (
    <BaseLayout>
      <Typography variant="h4">Checkout</Typography>
      <ul>
        {items.map((item: ShoppingCartItem) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </BaseLayout>
  );
};

export default CheckoutPage;
