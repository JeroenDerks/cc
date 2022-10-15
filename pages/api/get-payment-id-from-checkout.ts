import Stripe from "stripe";
import type { NextApiRequest, NextApiResponse } from "next";
import { format } from "date-fns";

const mail = require("@sendgrid/mail");

const config = { api: { bodyParser: true } };

mail.setApiKey(process.env.SENDGRID_API_KEY);

const stripe =
  process.env.STRIPE_SECRET_KEY &&
  new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2020-08-27" });

export default async function wehhookHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      if (!stripe) throw new Error("Stripe not available");

      const { checkoutId } = JSON.parse(req.body);
      console.log(checkoutId);
      const session = await stripe.checkout.sessions.retrieve(checkoutId);

      console.log(session);
      return;
      if (event.type === "checkout.session.completed") {
        const { id, shipping, metadata, payment_intent } = event.data
          .object as Stripe.Checkout.Session;

        const items = metadata?.items && JSON.parse(metadata.items);
        const orderId =
          typeof payment_intent === "string"
            ? payment_intent?.replace("pi_", "cc_")
            : id;

        const message = {
          to: "jeroenderks88@gmail.com",
          bcc: "info@celebratecode.com",
          from: { name: "Celebrate Code", email: "info@celebratecode.com" },
          templateId: "d-8ed3686528954bf4bd638d37dab43893",
          replyTo: "info@celebratecode.com",
          dynamicTemplateData: {
            firstName: "Jeroen",
            lastName: "Derks",
            orderDate: format(event.created * 1000, "d MMMM yyyy HH:mm"),
            orderId,
            addressLine1: shipping?.address?.line1,
            addressLine2: shipping?.address?.line2,
            postalCode: shipping?.address?.postal_code,
            city: shipping?.address?.city,
            state: shipping?.address?.state,
            country: shipping?.address?.country,
            orderData: items && Object.values(items),
          },
        };

        await mail.send(message);
      }
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);

      return res.status(500).send({ message });
    }
  } else {
    res.status(405).end("Method Not Allowed");
  }
}
