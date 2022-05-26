import Stripe from "stripe";
import { buffer } from "micro";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = { api: { bodyParser: false } };

export default async function wehhookHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const stripe =
    process.env.STRIPE_SECRET_KEY &&
    new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2020-08-27" });

  console.log(req.body);

  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET;

    let event;
    try {
      if (!stripe) throw new Error("Stripe not available");
      if (!sig || !webhookSecret) return;

      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);

      console.log("Webhook error: ", message);
      return res.status(400).send(`Webhook error: ${message}`);
    }
    console.log(event);
    res.status(200).send({});
  }
}
