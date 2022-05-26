import { Color, ColoredDataSet } from "types";

export type Sketch = {
  title: string;
  sketch: React.FC<SketchProps>;
};

export type SketchProps = {
  bg: Color;
  data: ColoredDataSet;
  loading: boolean;
  uuid: string;
  setLoading: (v: boolean) => void;
};
