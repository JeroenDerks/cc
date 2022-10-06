import Stripe from "stripe";
import { buffer } from "micro";
import type { NextApiRequest, NextApiResponse } from "next";
import { format } from "date-fns";
import { object } from "yup";
const mail = require("@sendgrid/mail");

export const config = { api: { bodyParser: false } };

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function wehhookHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const stripe =
    process.env.STRIPE_SECRET_KEY &&
    new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2020-08-27" });

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

      if (event.type === "payment_intent.succeeded") {
        console.log(event);
        const { id, shipping } = event.data.object as Stripe.PaymentIntent;

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
            orderId: id.replace("pi_", "cc_"),
            addressLine1: shipping?.address?.line1,
            addressLine2: shipping?.address?.line2,
            postalCode: shipping?.address?.postal_code,
            city: shipping?.address?.city,
            state: shipping?.address?.state,
            country: shipping?.address?.country,
            orderData: [
              {
                title: "Canvas 60 x 40",
                price: 69,
                language: "TSX",
                theme: "VS Code Dark",
                sketch: "Basic",
              },
              {
                title: "Canvas 60 x 40",
                price: 69,
                language: "Python",
                theme: "Rose pine dawn",
                sketch: "Rotate",
              },
              {
                title: "Canvas 60 x 40",
                price: 69,
                language: "CSS",
                theme: "Monokai",
                sketch: "Perspective",
              },
            ],
          },
        };

        console.log(message);

        await mail.send(message);
      }
      res.status(200).send({});
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);

      return res.status(500).send(`Webhook error: ${message}`);
    }
  } else {
    res.status(405).end("Method Not Allowed");
  }
}
