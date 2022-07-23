import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CssBaseline from "@mui/material/CssBaseline";
import { CartProvider } from "react-use-cart";
import { AppProps } from "next/app";
import Header from "components/Header";
import theme from "theme";
import "style.css";

const stripePromise =
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY &&
  loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  if (!stripePromise) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Elements stripe={stripePromise}>
          <CartProvider>
            <CssBaseline />
            <Header />
            <Component {...pageProps} />
          </CartProvider>
        </Elements>
      </ThemeProvider>
    </>
  );
}
