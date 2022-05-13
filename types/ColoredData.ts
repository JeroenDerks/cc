export type ColoredCharacter = {
  char: string;
  background: [number, number, number];
};

export type ColoredRow = Array<ColoredCharacter>;
export type ColoredDataSet = Array<ColoredRow>;
