import { Storage } from "@google-cloud/storage";

export default async function handler(req, res) {
  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
    },
  });

  const bucket = storage.bucket(process.env.BUCKET_NAME);

  const maxAgeSeconds = 3600;
  const method = "POST";
  const origin = "https://highlight-three.vercel.app";
  const responseHeader = "Content-Type";

  async function configureBucketCors() {
    await bucket.setCorsConfiguration([
      {
        maxAgeSeconds,
        method: [method],
        origin: [origin],
        responseHeader: [responseHeader],
      },
    ]);
  }

  configureBucketCors()
    .then(() => {
      const file = bucket.file(req.query.file);
      const options = {
        expires: Date.now() + 1 * 60 * 1000, //  1 minute,
        fields: { "x-goog-meta-test": "data" },
      };
      file
        .generateSignedPostPolicyV4(options)
        .then((response) => {
          console.log(response[0]);
          res.status(200).json(response[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log("Error on configuring CORS: " + err);
    });
}
