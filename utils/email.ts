import { EditorTheme, LanguageOption } from "types";
import { sketchOptions } from "./../components/Panes/OutputPane";

type InputProps = {
  name: string;
  price: number;
  quantity: number;
  id: string;
  theme: EditorTheme;
  language: LanguageOption;
  itemTotal: number;
  sketchId: number;
};

export const formatLineItems = (input: InputProps[]) =>
  input.map((item) => {
    return {
      name: item.name,
      theme: item.theme.title,
      language: item.language.title,
      price: item.itemTotal / 100,
      sketch: sketchOptions[item.sketchId].title,
    };
  });
