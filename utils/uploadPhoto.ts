export const uploadPhoto = async (
  pg: WebGL2RenderingContext | WebGLRenderingContext,
  id: string,
  setLoading?: (v: boolean) => void
) => {
  const filename = encodeURIComponent(`${id}.jpg`);
  let file;

  await pg.canvas.toBlob((blob) => {
    if (blob) file = new File([blob], filename, { type: "image/jpg" });
  }, "image/jpg");

  console.log(file);
  const res = await fetch(`/api/upload-url?file=${filename}`);
  console.log(res, res.status);
  const { url, fields } = await res.json();
  const formData = new FormData();

  Object.entries({ ...fields, file }).forEach(([key, value]) => {
    formData.append(key, value);
  });

  console.log(formData);

  const upload = await fetch(url, {
    method: "POST",
    body: formData,
  });
  if (upload?.ok) {
    console.log("Uploaded successfully!");
    setLoading && setLoading(false);
  } else {
    window.alert("Upload failed.");
    setLoading && setLoading(false);
  }
};
