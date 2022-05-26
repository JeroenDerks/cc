import React from "react";
import BaseLayout from "components/BaseLayout";
import BorderBox from "components/BorderBox";
import CheckoutForm from "components/CheckoutForm";

const Payment = () => {
  return (
    <BaseLayout>
      <BorderBox bx mb={5}>
        <CheckoutForm />
      </BorderBox>
    </BaseLayout>
  );
};

export default Payment;
