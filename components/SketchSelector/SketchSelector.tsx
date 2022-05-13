import React from "react";
import { styled } from "@mui/material";

import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Sketch } from "types";

const Wrapper = styled(Box)(({ theme }) => ({
  alignItems: "center",
  borderRadius: 4,
  border: `1px solid ${theme.palette.action.disabled}`,
  display: "flex",
  maxHeight: 56,
  minHeight: 56,
  padding: "0 16px",

  "&:hover": {
    border: `1px solid ${theme.palette.action.active}`,
  },
}));

const SketchSelector = ({
  sketchOptions,
  selectedId,
  setSelectedId,
}: {
  sketchOptions: Array<Sketch>;
  selectedId: string;
  setSelectedId: (v: string) => void;
}) => {
  return (
    <Wrapper>
      <FormControl>
        <RadioGroup
          aria-labelledby="sketch-options"
          name="sketch-option-group"
          onChange={(e) => setSelectedId(e.target.value)}
          row
          value={selectedId}
        >
          {sketchOptions.map(({ title }, i) => (
            <FormControlLabel
              control={<Radio />}
              key={i}
              label={title}
              value={i}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Wrapper>
  );
};

export default SketchSelector;
