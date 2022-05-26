import React, { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useCart } from "react-use-cart";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ShippingAddressValues } from "types";
import { useRouter } from "next/router";
import SaveIcon from "@mui/icons-material/Save";
import { CircularProgress } from "@mui/material";

const CARD_ELEMENT_OPTIONS = {
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "white",
      background: "red",
      padding: "16px",
      color: "white",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "grey",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const CheckoutForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [clientSecret, setClientSecret] = useState();
  const { items } = useCart();
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const sum = items.reduce((acc, { price }) => {
        return (acc += price);
      }, 0);

      const resClient = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({ amount: sum, currency: "EUR" }),
      });

      const dataClient = await resClient.json();
      setClientSecret(dataClient.clientSecret);
    };
    fetchData();
  }, []);

  const element = useElements();
  const stripe = useStripe();

  if (!clientSecret) {
    return <>Loading...</>;
  }

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!stripe || !element || !clientSecret) {
        throw new Error("!stripe || !element || !clientSecret");
      }

      const card = element && element.getElement(CardElement);
      if (!card) {
        throw new Error("no card");
      }
      const shippingDetails =
        typeof window !== "undefined" &&
        window.localStorage.getItem("shipping_details");
      console.log(shippingDetails);
      if (!shippingDetails) throw new Error("No shipping details available");

      const details: ShippingAddressValues = JSON.parse(shippingDetails);
      console.log(details);
      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card,
            billing_details: {
              name: details.firstName + " " + details.lastName,
            },
          },
        });
      console.log(paymentIntent);
      console.log(stripeError);
      if (stripeError) {
        throw new Error(stripeError.message);
      } else if (paymentIntent?.status === "succeeded") {
        router.push("/checkout/success");
      }
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);

      console.log({
        title: "Error Occurred",
        description: message,
        status: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box width={500}>
      {stripe && element ? (
        <CardElement
          options={CARD_ELEMENT_OPTIONS}
          onChange={(e) => console.log(e.error)}
        />
      ) : (
        <p>no stripe</p>
      )}
      <Box mt={4}>
        <Button
          onClick={handleSubmit}
          variant="outlined"
          color="success"
          disabled={loading}
          startIcon={loading && <CircularProgress />}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CheckoutForm;
