export type ColoredCharacter = {
  char: string;
  background: [number, number, number];
};

export type ColoredLine = Array<ColoredCharacter>;
export type ColoredDat = Array<ColoredLine>;
