export type Sketch = {
  title: string;
  sketch: ({ data, bg }: { data: any; bg: any }) => JSX.Element;
};
