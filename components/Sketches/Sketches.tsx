import React from "react";
import Box from "@mui/material/Box";
import { convertColorToRGB } from "../../utils";
import { PrismTheme } from "prism-react-renderer";
import { ColoredDataSet, Sketch } from "types";

const Sketches = ({
  theme,
  rawData,
  sketchOptions,
  sketchId,
}: {
  theme: PrismTheme;
  rawData: ColoredDataSet;
  sketchOptions: Array<Sketch>;
  sketchId: string;
}) => {
  const { background, backgroundColor } = theme.plain;
  const SelectedSketch = sketchOptions[parseInt(sketchId)].sketch;

  return (
    <Box overflow="hidden">
      <SelectedSketch
        bg={convertColorToRGB(background || backgroundColor)}
        data={rawData}
      />
    </Box>
  );
};

export default Sketches;
