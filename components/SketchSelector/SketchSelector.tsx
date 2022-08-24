import React from "react";
import { Grid, styled } from "@mui/material";

import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Sketch } from "types";
import theme from "theme";

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

      <Box
        border={`1px solid ${theme.palette.action.disabled}`}
        display={{ xs: "block", sm: "none", md: "none" }}
        borderRadius="4px"
        px={2}
      >
        <Grid container>
          {sketchOptions.map(({ title }, i) => (
            <Grid item xs={6} key={i}>
              <FormControlLabel control={<Radio />} label={title} value={i} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default SketchSelector;
