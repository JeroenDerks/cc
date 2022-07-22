import React from "react";
import { useRouter } from "next/router";

import Typography from "@mui/material/Typography";
import ShippingAddress from "components/ShippingAddress";
import Section from "components/Section";

import type { ShippingAddressValues } from "types";

const ShippingDetails = () => {
  const router = useRouter();

  const saveShippingDetails = (v: ShippingAddressValues) => {
    window.localStorage.setItem("shipping_details", JSON.stringify(v));
    router.push("/checkout/payment");
  };

  return (
    <Section>
      <Typography variant="h5">Shipping details</Typography>
      <Typography variant="subtitle1" mb={4}>
        Provide your address details, and we will provide the best shipping
        prices.
      </Typography>
      <ShippingAddress
        onSubmit={(v: ShippingAddressValues) => saveShippingDetails(v)}
      />
    </Section>
  );
};

export default ShippingDetails;
