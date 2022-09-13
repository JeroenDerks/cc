import Stripe from "stripe";
import { buffer } from "micro";
import type { NextApiRequest, NextApiResponse } from "next";
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

      if (event.type !== "payment_intent.succeeded")
        throw new Error("Event is not of correct checkout type");

      console.log(event);

      const message = {
        to: "jeroenderks88@gmail.com",
        bcc: "info@celebratecode.com",
        from: { name: "Celebrate Code", email: "info@celebratecode.com" },
        templateId: "d-8ed3686528954bf4bd638d37dab43893",
        replyTo: "info@celebratecode.com",
        dynamicTemplateData: {
          firstName: "Jeroen",
          lastName: "Derks",
        },
      };

      console.log(message);

      await mail.send(message);
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
