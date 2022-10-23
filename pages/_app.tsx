import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CartProvider } from "react-use-cart";
import { AppProps } from "next/app";
import Header from "components/Header";
import Footer from "components/Footer";
import Flex from "components/Flex";
import theme from "theme";
import { setCDN } from "shiki";
import Script from "next/script";
import "style.css";
setCDN("https://unpkg.com/shiki/");

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <CssBaseline />
          {process.env.NODE_ENV && process.env.NODE_ENV !== "development" && (
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
              strategy="afterInteractive"
            />
          )}
          {process.env.NODE_ENV && process.env.NODE_ENV !== "development" && (
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
            `}
            </Script>
          )}
          <Flex
            minHeight="100vh"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Flex>
        </CartProvider>
      </ThemeProvider>
    </>
  );
}
