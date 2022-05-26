import React from "react";
import Box from "@mui/material/Box";
import { convertColorToRGB } from "../../utils";
import { PrismTheme } from "prism-react-renderer";
import { ColoredDataSet, Sketch } from "types";

const Sketches = ({
  theme,
  rawData,
  loading,
  setLoading,
  sketchOptions,
  sketchId,
  uuid,
}: {
  theme: PrismTheme;
  rawData: ColoredDataSet;
  sketchOptions: Array<Sketch>;
  loading: boolean;
  setLoading: (v: boolean) => void;
  sketchId: string;
  uuid: string;
}) => {
  const { background, backgroundColor } = theme.plain;
  const SelectedSketch = sketchOptions[parseInt(sketchId)].sketch;

  return (
    <Box overflow="hidden">
      <SelectedSketch
        bg={convertColorToRGB(background || backgroundColor)}
        data={rawData}
        loading={loading}
        setLoading={setLoading}
        uuid={uuid}
      />
    </Box>
  );
};

export default Sketches;
