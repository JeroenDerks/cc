import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  console.log(stripe);
  if (req.method === "POST") {
    try {
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
