import type { NextApiRequest, NextApiResponse } from "next";
const shiki = require("shiki");

const geShiki = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send(shiki);
};

export default geShiki;
