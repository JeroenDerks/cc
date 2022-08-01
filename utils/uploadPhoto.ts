export const uploadPhoto = async (
  pg: WebGL2RenderingContext | WebGLRenderingContext | any,
  id: string
) => {
  try {
    const filename = encodeURIComponent(`${id}.jpg`);
    let file;

    await pg.canvas.toBlob((blob: any) => {
      if (blob) file = new File([blob], filename, { type: "image/jpg" });
    }, "image/jpg");

    const res = await fetch(`/api/upload-gcs?file=${filename}`);
    const { url, fields } = await res.json();
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]: any) => {
      formData.append(key, value);
    });

    const upload = await fetch(url, { method: "POST", body: formData });

    if (upload?.ok) {
      console.log("Uploaded successfully!");
    } else {
      window.alert("Upload failed.");
    }
  } catch (err) {
    let message;
    if (err instanceof Error) message = err.message;
    else message = String(err);
    console.error(message);
  }
};
