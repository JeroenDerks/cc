import Stripe from "stripe";
import { buffer } from "micro";
import type { NextApiRequest, NextApiResponse } from "next";
import { format } from "date-fns";

const mail = require("@sendgrid/mail");

export const config = { api: { bodyParser: false } };

mail.setApiKey(process.env.SENDGRID_API_KEY);

const stripe =
  process.env.STRIPE_SECRET_KEY &&
  new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2020-08-27" });

export default async function wehhookHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET;

    let event;
    try {
      if (!stripe) throw new Error("Stripe not available");
      if (!sig || !webhookSecret) return;

      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);

      if (!event) {
        throw new Error("Stripe checkout event not available");
      }
      if (event.type === "checkout.session.completed") {
        const { id, shipping, metadata, payment_intent, customer_details } =
          event.data.object as Stripe.Checkout.Session;

        const items = metadata && Object.values(metadata);
        const orderId =
          typeof payment_intent === "string"
            ? payment_intent?.replace("pi_", "cc_")
            : id;

        const message = {
          to: customer_details?.email,
          bcc: "info@celebratecode.com",
          from: { name: "Celebrate Code", email: "info@celebratecode.com" },
          templateId: "d-8ed3686528954bf4bd638d37dab43893",
          replyTo: "info@celebratecode.com",
          dynamicTemplateData: {
            name: customer_details?.name,
            orderDate: format(event.created * 1000, "d MMMM yyyy HH:mm"),
            orderId,
            addressLine1: shipping?.address?.line1,
            addressLine2: shipping?.address?.line2,
            postalCode: shipping?.address?.postal_code,
            city: shipping?.address?.city,
            state: shipping?.address?.state,
            country: shipping?.address?.country,
            orderData: items?.map((item) => JSON.parse(item)),
          },
        };

        await mail.send(message);
      }
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);

      return res.status(500).send(`Webhook error: ${message}`);
    }
    res.status(200).send({});
  } else {
    res.status(405).end("Method Not Allowed");
  }
}
