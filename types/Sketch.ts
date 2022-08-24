import { Color, ColoredDataSet } from "types";

export type Sketch = {
  title: string;
  sketches: React.FC<SketchProps>[];
};

export type SketchProps = {
  bg: Color;
  data: ColoredDataSet;
  scale: number;
  loading: boolean;
  uuid: string;
};
