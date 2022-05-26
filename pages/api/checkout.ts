import Stripe from "stripe";
import type { NextApiRequest, NextApiResponse } from "next";

const stripe =
  process.env.STRIPE_SECRET_KEY &&
  new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2020-08-27" });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      if (!stripe) throw new Error("Stripe not available");
      const body = JSON.parse(req.body);
      console.log(body);
      const { amount, currency } = body;
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
      });
      res.status(200).send({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
      res.status(405).end("error");
    }
  } else {
    res.status(405).end("Method not allowed");
  }
};
