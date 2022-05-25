import React, { useEffect, useState } from "react";
import BaseLayout from "components/BaseLayout";
import { useCart, Item } from "react-use-cart";
import { Typography } from "@mui/material";

const CheckoutPage = () => {
  const { isEmpty, items, updateItemQuantity, removeItem } = useCart();
  const [itemsInCart, setItemsInCart] = useState<Array<Item>>([]);

  useEffect(() => {
    setItemsInCart(items);
  }, [items]);

  if (itemsInCart.length < 1) {
    return (
      <BaseLayout>
        <p>Your cart is empty</p>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <Typography variant="h4">Checkout</Typography>
      <ul>
        {itemsInCart.map(({ quantity, name, id }) => (
          <li key={id}>
            <p>
              {quantity} x {name}: {id}
            </p>

            <button onClick={() => removeItem(id)}>&times;</button>
            <img
              src={`https://storage.googleapis.com/highlight_images/${id}_preview.jpg`}
            />
          </li>
        ))}
      </ul>
    </BaseLayout>
  );
};

export default CheckoutPage;
