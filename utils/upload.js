import { v4 as uuidv4 } from "uuid";

export const uploadPhoto = async (pg) => {
  const title = uuidv4();
  const filename = encodeURIComponent(`${title}.jpeg`);

  let file;

  pg.canvas.toBlob((blob) => {
    file = new File([blob], filename, { type: "image/jpeg" });
  }, "image/jpeg");

  const res = await fetch(`/api/upload-url?file=${filename}`);
  const { url, fields } = await res.json();
  const formData = new FormData();

  Object.entries({ ...fields, file }).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const upload = await fetch(url, {
    method: "POST",
    body: formData,
  });
  if (upload?.ok) {
    console.log("Uploaded successfully!");
    window.location = `/orders/${title}`;
  } else {
    console.error("Upload failed.");
  }
};
