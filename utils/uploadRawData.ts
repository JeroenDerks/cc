import { LanguageOption, EditorTheme } from "types";

export const uploadRawData = async ({
  sketchId,
  theme,
  userValue,
  language,
  uuid,
}: {
  language: LanguageOption;
  sketchId: string;
  theme: EditorTheme;
  userValue: string;
  uuid: string;
}) => {
  try {
    const filename = encodeURIComponent(`${uuid}.json`);

    const res = await fetch(`/api/upload-gcs?file=${filename}`);
    const { url, fields } = await res.json();

    const body = JSON.stringify({
      uuid,
      userValue,
      sketchId,
      theme: theme.title,
      language: language.title,
    });
    const blob = new Blob([body], { type: "application/json" });
    const file = new File([blob], filename);
    let formData = new FormData();

    Object.entries({ ...fields }).forEach(([key, value]) => {
      if (typeof value === "string") formData.append(key, value);
    });

    formData.append("file", file, filename);

    const upload = await fetch(url, { method: "POST", body: formData });
    if (upload?.ok) {
      console.log("Uploading raw data successfully!");
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
