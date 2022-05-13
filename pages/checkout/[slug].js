import React, { useState } from "react";
// import { styled } from "@mui/material";
// import { useRouter } from "next/router";

// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
import BaseLayout from "components/BaseLayout";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { PaymentElement } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const CheckoutPage = () => {
  // const router = useRouter();
  // const [publishableKey, setPublishableKey] = useState();

  return (
    <BaseLayout>
      Checkout
      <CheckoutForm />
    </BaseLayout>
  );
};

export default CheckoutPage;
