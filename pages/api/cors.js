import fetch from "isomorphic-unfetch";

const Cors = async (req, res) => {
  const { url } = req.query;
  console.log(res);
  console.log(req.body);
  console.log(req.headers);
  try {
    const resProxy = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY":
          "90748d07-b33c-4721-b946-ec29c855c6df-a96ac8fc-863b-4188-a2c8-729fcc017c17:912c9661-d857-4aa5-aca3-4ad2f198406f",
      },
      body: JSON.stringify(req.body),
    });
    res.status(200).send(resProxy.body);
  } catch (error) {
    res.status(400).send(error.toString());
  }
};

export default Cors;
