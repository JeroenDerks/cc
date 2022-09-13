import Stripe from "stripe";
import { buffer } from "micro";
import type { NextApiRequest, NextApiResponse } from "next";
const mail = require("@sendgrid/mail");

export const config = { api: { bodyParser: false } };

export default async function wehhookHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const stripe =
    process.env.STRIPE_SECRET_KEY &&
    new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2020-08-27" });

  mail.setApiKey(process.env.SENDGRID_API_KEY);

  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET;

    let event;
    try {
      if (!stripe) throw new Error("Stripe not available");
      if (!sig || !webhookSecret) return;

      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);

      // TODO: figure out send grid
      // const body = {
      //   name: "Jeroen Derks",
      //   email: "hello@jeroen.derks",
      //   message: "just testing",
      // };
      // const message = `Name: ${body.name}\r\n Email: ${body.email}\r\n Message: ${body.message}`;

      // mail.send({
      //   to: "jeroenderks88@gmail.com",
      //   from: "testing@email.com",
      //   subject: "New Message!",
      //   text: message,
      //   html: message.replace(/\r\n/g, "<br>"),
      // });
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);

      return res.status(400).send(`Webhook error: ${message}`);
    }
    console.log(event);

    res.status(200).send({});
  }
}
