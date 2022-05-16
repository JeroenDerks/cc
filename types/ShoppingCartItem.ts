import { ColoredDataSet, EditorTheme } from "types";

export type ShoppingCartItem = {
  name: string;
  price: number;
  quantity: number;
  id: string;
  theme: EditorTheme;
  rawData: ColoredDataSet;
  sketchId: string;
};
