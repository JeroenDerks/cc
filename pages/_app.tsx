import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CssBaseline from "@mui/material/CssBaseline";
import { CartProvider } from "react-use-cart";
import { AppProps } from "next/app";
import Header from "components/Header";
import Footer from "components/Footer";
import { styled } from "@mui/material";
import theme from "theme";
import { setCDN } from "shiki";
import "style.css";
setCDN("https://unpkg.com/shiki/");

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "100vh",
}));

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
            <Container>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </Container>
          </CartProvider>
        </Elements>
      </ThemeProvider>
    </>
  );
}
