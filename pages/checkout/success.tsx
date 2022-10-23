import React, { useEffect } from "react";
import Section from "components/Section";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { gridP } from "theme";
import Skeleton from "@mui/material/Skeleton";
import { useCart } from "react-use-cart";

const Success = () => {
  const router = useRouter();
  const [orderId, setOrderId] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | false>(false);
  const { emptyCart } = useCart();

  useEffect(() => {
    const getCheckoutId = async () => {
      try {
        const res = await fetch(
          `/api/get-payment-id/${router.query.session_id}`
        );

        if (res.status === 200) {
          const data = await res.json();
          setOrderId(data.orderId);
          emptyCart();
        } else throw new Error("Server didnt respond with 200");
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };
    router.query.session_id && getCheckoutId();
  }, [router.query.session_id]);

  return (
    <Section flexGrow={1}>
      <Box p={gridP}>
        <Typography variant="h3">Thank you for your order!</Typography>
        <Typography variant="body1">
          You will receive a confirmation email shortly
        </Typography>

        <Box display="flex" mt={5}>
          <Typography variant="body1" mr={2}>
            Order id:
          </Typography>
          <Typography variant="body1" fontWeight={700}>
            {loading ? (
              <Skeleton variant="text" width={240} />
            ) : (
              error || orderId
            )}
          </Typography>
        </Box>
      </Box>
    </Section>
  );
};

export default Success;
1;
