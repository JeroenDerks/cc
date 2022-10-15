import Stripe from "stripe";
import type { NextApiRequest, NextApiResponse } from "next";
import { sketchOptions } from "components/Panes/OutputPane";

const stripe =
  process.env.STRIPE_SECRET_KEY &&
  new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2020-08-27" });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      if (!stripe) throw new Error("Stripe not available");
      const { items } = JSON.parse(req.body);

      const lineItems = items.map(({ id }: { id: string }) => {
        return {
          quantity: 1,
          description: id,
          price_data: {
            product_data: {
              name: `Canvas - 60 x 40 cm`,
              images: [
                `https://storage.googleapis.com/highlight_images/${id}_preview.jpg`,
              ],
            },
            unit_amount: 69 * 100,
            currency: "eur",
          },
        };
      });

      // Needed because stripe doesnt accept stringified metadata of more than 500 characters
      // This creates an object for each item.
      const formattedItems = items.reduce(
        (accumulator: any, value: any, i: number) => {
          return {
            ...accumulator,
            ["item_" + i]: {
              name: value.name,
              price: value.itemTotal / 100,
              theme: value.theme.title,
              language: value.language.title,
              sketch: sketchOptions[parseInt(value.sketchId)].title,
            },
          };
        },
        {}
      );

      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        payment_method_types: ["card"],
        metadata: { items: JSON.stringify(formattedItems) },
        shipping_address_collection: { allowed_countries: ["DE", "DK"] },
        tax_id_collection: { enabled: true },
        mode: "payment",
        success_url: `${req.headers.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.referer}/cart`,
      });

      res.status(200).send({ url: session.url });
    } catch (err: unknown) {
      if (err instanceof Error) {
        return res.status(500).json(err.message);
      } else res.status(500).json("Unknown error");
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
