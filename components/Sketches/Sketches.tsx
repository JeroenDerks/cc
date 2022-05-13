import React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { convertColorToRGB } from "../../utils";
import { PrismTheme } from "prism-react-renderer";
import { ColoredDataSet, Sketch } from "types";

export const Container = styled(Box)(({ bg }: { bg?: string | number }) => ({
  background: bg,
  overflow: "hidden",
}));

const Sketches = ({
  theme,
  rawData,
  sketchOptions,
  selectedId,
}: {
  theme: PrismTheme;
  rawData: ColoredDataSet;
  sketchOptions: Array<Sketch>;
  selectedId: string;
}) => {
  const { background, backgroundColor } = theme.plain;

  return (
    <Container bg={background || backgroundColor}>
      {sketchOptions.map(
        ({ sketch: Sketch }, i) =>
          i === parseInt(selectedId) &&
          rawData && (
            <Sketch
              bg={convertColorToRGB(background || backgroundColor)}
              data={rawData}
              key={i}
            />
          )
      )}
    </Container>
  );
};

export default Sketches;
