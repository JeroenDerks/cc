// Under construction

export const sendGelatoRequest = async ({ orderId }) => {
  // === Define headers ===
  let headers = {
    "Content-Type": "application/json",
    "X-API-KEY": process.env.GELATO_API_KEY,
  };

  // === Set-up quote request ===
  let quoteUrl = "/api/cors?url=https://order.gelatoapis.com/v3/orders";
  let quoteJson = {
    orderType: "draft",
    orderReferenceId: orderId,
    customerReferenceId: orderId,
    currency: "EUR",
    items: [
      {
        itemReferenceId: orderId,
        productUid: "canvas_400x600-mm-16x24-inch_canvas_wood-fsc-slim_4-0_hor",
        fileUrl: `https://storage.googleapis.com/highlight_images/${orderId}.jpeg`,
        quantity: 1,
      },
    ],
    shipmentMethodUid: "normal",
    shippingAddress: {
      companyName: "Example",
      firstName: "Paul",
      lastName: "Smith",
      addressLine1: "451 Clarkson Ave",
      addressLine2: "Brooklyn",
      state: "NY",
      city: "New York",
      postCode: "11203",
      country: "US",
      email: "apisupport@gelato.com",
      phone: "123456789",
    },
  };

  fetch(quoteUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(quoteJson),
  })
    .then((response) => response.text())
    .then((body) => {
      console.log("body", body);

      let data = JSON.parse(body);
      let promiseUid = data.production.shipments[0].promiseUid;
      let orderCreateUrl = "https://api.gelato.com/v2/order/create";
      let orderCreateJson = {
        promiseUid: "" + promiseUid + "",
      };

      fetch(orderCreateUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(orderCreateJson),
      }).then((res) => console.log(res.text));
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });
};
