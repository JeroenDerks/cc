import React from "react";
import Box from "@mui/material/Box";
import { convertColorToRGB } from "../../utils";
import { ColoredDataSet, Sketch, EditorTheme } from "types";

const Sketches = ({
  theme,
  rawData,
  loading,
  sketchOptions,
  sketchId,
  uuid,
}: {
  theme: EditorTheme;
  rawData: ColoredDataSet;
  sketchOptions: Array<Sketch>;
  loading: boolean;
  sketchId: string;
  uuid: string;
}) => {
  const SelectedSketch = sketchOptions[parseInt(sketchId)].sketch;

  return (
    <Box overflow="hidden">
      <SelectedSketch
        bg={convertColorToRGB(theme.bg)}
        data={rawData}
        loading={loading}
        uuid={uuid}
      />
    </Box>
  );
};

export default Sketches;
