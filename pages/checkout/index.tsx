import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";
import { useRouter } from "next/router";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ShippingAddress from "components/ShippingAddress";
import BaseLayout from "components/BaseLayout";
import BorderBox from "components/BorderBox";

import { sendGelatoRequest } from "utils/gelato_request";
import { getShippingOptions } from "utils/getShippingOptions";

const OrderPage = () => {
  const router = useRouter();
  const [orderId, setOrderId] = useState<string | string[]>("");
  const [shippingOptions, setShippingOptions] = useState();

  useEffect(() => {
    if (router.query?.slug) setOrderId(router.query?.slug), [router];
  });

  // const getShipmentOptions = async (v) => {
  //   console.log("get shipment options for: ", v);
  //   const options = await getShippingOptions({ orderId, shippingAddress: v });
  //   setShippingOptions(options);

  //   // sendGelatoRequest({ orderId: orderId });
  // };

  return (
    <BaseLayout>
      <BorderBox bx>
        <Typography variant="h5">Canvas print 60 x 40 cm</Typography>
        <Typography variant="subtitle1" gutterBottom>
          {orderId}
        </Typography>
        {orderId && (
          <img
            src={`https://storage.googleapis.com/highlight_images/${orderId}_preview.jpg`}
            width="800"
            style={{ maxWidth: "100%" }}
          />
        )}
      </BorderBox>

      <BorderBox my={10} mx={[2, 3, 10]} bt maxWidth={720} />

      <BorderBox bx mb={5}>
        <Typography variant="h6">Shipping details</Typography>
        <Typography variant="subtitle1" paragraph>
          Provide your address details, and we will provide the best shipping
          prices.
        </Typography>
        {/* <ShippingAddress onSubmit={(v) => getShipmentOptions(v)} /> */}
        {/* {shippingOptions && <ShippingOptions options={shippingOptions} />}*/}
      </BorderBox>
    </BaseLayout>
  );
};

export default OrderPage;
