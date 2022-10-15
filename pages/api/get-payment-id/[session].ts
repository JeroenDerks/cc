import Stripe from "stripe";
import type { NextApiRequest, NextApiResponse } from "next";
import { format } from "date-fns";

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

const stripe =
  process.env.STRIPE_SECRET_KEY &&
  new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2020-08-27" });

export default async function wehhookHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      if (!stripe) throw new Error("Stripe not available");

      const checkoutId = req.query.session;
      if (!checkoutId || typeof checkoutId !== "string")
        throw new Error("No checkoutId");
      const session = await stripe.checkout.sessions.retrieve(checkoutId);

      if (
        !session ||
        !session.payment_intent ||
        typeof session.payment_intent !== "string"
      )
        throw new Error("No session or payment intent");

      return res
        .status(200)
        .send({ orderId: session.payment_intent.replace("pi_", "cc_") });
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
