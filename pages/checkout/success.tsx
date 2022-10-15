import React, { useEffect } from "react";
import Section from "components/Section";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { gridP } from "theme";
import SeparatorLine from "components/SeparatorLine";

const Success = () => {
  const router = useRouter();
  const [orderId, setOrderId] = React.useState<string>("");

  useEffect(() => {
    const getCheckoutId = async () => {
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
      <Box p={gridP}>
        <Typography variant="h3">Thank you for your order!</Typography>
        <Typography variant="body1">
          You will receive a confirmation email shortly
        </Typography>
      </Box>
      <SeparatorLine disableMargin />
      <Box p={gridP} display="flex">
        <Typography variant="body1" mr={2}>
          Order id:
        </Typography>
        <Typography variant="body1" fontWeight={700}>
          {orderId}
        </Typography>
      </Box>
    </Section>
  );
};

export default Success;
1;
