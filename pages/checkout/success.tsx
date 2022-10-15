import React, { useEffect } from "react";
import Section from "components/Section";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();
  const [orderId, setOrderId] = React.useState<string>("");

  useEffect(() => {
    const getCheckoutId = async () => {
      console.log(router.query.session_id);
      const res = await fetch(
        `/api/get-payment-id/${router.query.session_id}`,
        {}
      );

      if (res.status === 200) {
        const data = await res.json();
        setOrderId(data.orderId);
      }
    };
    getCheckoutId();
  }, [router.query.session_id]);

  return (
    <Section>
      <Typography variant="h4">Congrats</Typography>
      <Typography variant="h4">{orderId}</Typography>
    </Section>
  );
};

export default Success;
1;
