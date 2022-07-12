export type Color = [number, number, number];

export type ColoredCharacter = {
  char: string;
  background: Color;
};

export type ColoredRow = Array<ColoredCharacter>;
export type ColoredDataSet = Array<ColoredRow>;

export type GroupedColoredDataLine = Array<{
  letterCount: number;
  bg: Color;
  x: number;
  char: string;
}>;

export type GroupedDataByColor = {};
