import React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import type { Sketch } from "types";

const Wrapper = styled(Box)(({ theme }) => ({
  alignItems: "center",
  borderRadius: 4,
  border: `1px solid ${theme.palette.action.disabled}`,
  display: "flex",
  minHeight: 56,
  padding: "0 16px",

  "&:hover": {
    border: `1px solid ${theme.palette.action.active}`,
  },
}));

const SketchSelector = ({
  sketchOptions,
  sketchId,
  setSketchId,
}: {
  sketchOptions: Array<Sketch>;
  sketchId: string;
  setSketchId: (v: string) => void;
}) => {
  return (
    <>
      {/* Desktop */}
      <Wrapper display={{ xs: "none", sm: "flex", md: "flex" }}>
        <FormControl>
          <RadioGroup
            aria-labelledby="sketch-options"
            name="sketch-option-group"
            onChange={(e) => setSketchId(e.target.value)}
            row
            value={sketchId}
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

      {/* Mobile */}
      <Box display={{ xs: "block", sm: "none", md: "none" }}>
        <FormControl style={{ width: "100%" }}>
          <InputLabel id="theme-label">Sketch</InputLabel>
          <Select
            label="Sketch"
            onChange={(e) => setSketchId(e.target.value)}
            value={sketchId}
          >
            {sketchOptions.map(({ title }, i) => (
              <MenuItem value={i} key={i}>
                {title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SketchSelector;
