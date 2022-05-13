import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "theme";
import "style.css";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Elements stripe={stripePromise}>
          <CssBaseline />
          <Component {...pageProps} />
        </Elements>
      </ThemeProvider>
    </>
  );
}
