import React, { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Box from "@mui/material/Box";

const CARD_ELEMENT_OPTIONS = {
  hidePostalCode: true,
  iconStyle: "default",
  style: {
    base: {
      iconColor: "blue",
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
  const [cardError, setCardError] = useState();
  const [clientSecret, setClientSecret] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const resClient = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({ amount: 6900, currency: "EUR" }),
      });

      const dataClient = await resClient.json();
      setClientSecret(dataClient.clientSecret);
    };
    fetchData();
  }, []);

  const element = useElements();
  const stripe = useStripe();
  const card = element?.getElement(CardElement);

  if (!clientSecret) {
    return "Loading...";
  }
  const handleSubmit = async () => {
    if (!stripe || !element || !clientSecret) {
      return;
    }

    try {
      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card,
            billing_details: { name: "Jeroen Derks" },
          },
        });

      if (stripeError) {
        throw new Error(stripeError.message);
      } else if (paymentIntent?.status === "succeeded") {
        console.log({
          title: "Payment Successfully Received",
          status: "success",
        });
      }
    } catch (error) {
      console.log({
        title: "Error Occurred",
        description: error.message,
        status: "error",
      });
    }
  };

  return (
    <Box width={500}>
      {stripe && element ? (
        <CardElement
          options={CARD_ELEMENT_OPTIONS}
          onChange={(e) => setCardError(e.error)}
        />
      ) : (
        <p>no stripe</p>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </Box>
  );
};

export default CheckoutForm;
