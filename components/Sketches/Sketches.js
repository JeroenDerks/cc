import styled from "styled-components";
import React from "react";
import { convertColorToRGB } from "../../utils";

const Container = styled.div`
  overflow: hidden;
`;

const Sketches = ({ theme, rawData, sketchOptions, selectedId }) => {
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
