// Under construction

export const getShippingOptions = async ({ orderId, shippingAddress }) => {
  const quoteUrl = "/api/cors?url=https://order.gelatoapis.com/v3/orders:quote";
  const bodyJson = {
    orderType: "order",
    orderReferenceId: orderId,
    customerReferenceId: orderId,
    currency: "EUR",
    allowMultipleQuotes: false,
    recipient: shippingAddress,
    products: [
      {
        itemReferenceId: orderId,
        productUid: "canvas_400x600-mm-16x24-inch_canvas_wood-fsc-slim_4-0_hor",
        fileUrl: `https://storage.googleapis.com/highlight_images/${orderId}.jpeg`,
        quantity: 1,
      },
    ],
  };

  const response = await fetch(quoteUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyJson),
  });
  console.log(response);
  response.ok; // => false
  response.status; // => 404
  const text = await response.json();
  console.log(text);
  return text;

  console.log(JSON.stringify(bodyJson));
  fetch(quoteUrl, { body: JSON.stringify(bodyJson) })
    .then((response) => response.text())
    .then((body) => {
      console.log("body", body);
    })
    .catch((error) => {
      console.log("Request failed", error);
    });
};
