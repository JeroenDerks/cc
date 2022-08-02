import React from "react";
import Section from "components/Section";
import SeparatorLine from "components/SeparatorLine";
import { Box, Typography } from "@mui/material";
import { gridP } from "theme";

const LegalNotice = () => {
  return (
    <Section>
      <Box maxWidth={880} p={gridP}>
        <Typography variant="h2" paragraph>
          Return policy
        </Typography>
        <Typography variant="h4" paragraph mt={6}>
          What Is Your Return Policy And Quality Guarantee?
        </Typography>
        <Typography paragraph>
          If you’re not satisfied with the quality of the products, get in touch
          within 30 days of receiving the item and we’ll do everything we can to
          investigate and find a solution.
        </Typography>
        <Typography paragraph>
          If your claim is validated by our quality assurance team, we will be
          happy to send a complimentary replacement order to your customer as
          quickly as possible or refund the money.
        </Typography>

        <Typography variant="h4" paragraph mt={6}>
          Refund
        </Typography>
        <Typography paragraph>
          We'd much rather fix any problems and send a replacement order to make
          sure you are happy with your order. If that's not possible or you
          can't wait for a new order to arrive, please indicate that when you
          reach out to us and we'll give you a refund.
        </Typography>
        <Typography variant="h4" paragraph mt={6}>
          Color consistency
        </Typography>
        <Typography paragraph>
          We use the same print machines, paper types, and work processes at our
          print partners to minimize color variations. Having said that,
          printing is a chemical process and 100% consistency cannot be
          achieved. Multiple factors influence the color, consistency, and final
          result: machine type, machine settings, paper types, humidity in the
          room, when the machine was last cleaned, just to mention a few
          examples. Color variations that may occur due to the above-mentioned
          reasons lie within acceptable tolerance levels and are not covered
          under our quality guarantee.
        </Typography>
        <Typography variant="h4" paragraph mt={6}>
          Defective or damaged products
        </Typography>
        <Typography paragraph>
          If you receive defective or damaged orders, such as damage to the
          delivered products, errors in the number or quantity of the delivered
          products, or lack of quality of the delivered product not caused by
          lack of quality of the content you provided. Should you want to submit
          a new order, we will cover the costs of the new order.
        </Typography>
        <Typography variant="h4" paragraph mt={6}>
          Wrong Address
        </Typography>
        <Typography paragraph>
          If you provide an address that is considered insufficient by the
          courier, the shipment will be returned and disposed of safely. Should
          you want to submit a new order with an updated address, you will be
          liable for the costs of the new order.
        </Typography>
        <Typography variant="h4" paragraph mt={6}>
          Unclaimed
        </Typography>
        <Typography paragraph>
          If your customer is not able to receive their order at the address,
          the shipments may be available for pick up at their local post office
          or carrier pick up point. Shipments that go unclaimed may be returned
          to the sender. For these cases, please place a new order and get in
          touch with us so that we can report the problem and arrange for the
          product price to be refunded for the new order (you will still have to
          pay for the shipping costs).
        </Typography>
        <Typography variant="h4" paragraph mt={6}>
          Returns
        </Typography>
        <Typography paragraph>
          We currently do not support returns due to the fact that the products
          you order are personalized and made specifically for each order.
          Should you want to submit a new order, you will be liable for the
          costs of the new order.
        </Typography>
      </Box>
    </Section>
  );
};

export default LegalNotice;
