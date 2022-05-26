import React from "react";
import { Select, InputLabel, FormControl } from "@mui/material";
import { countryOptions } from "./countryOptions";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import { FormHelperText } from "@mui/material";
import { FormikErrors, FormikTouched } from "formik";
import type { ShippingAddressValues } from "types";

const FormSelect = ({
  errors,
  setFieldValue,
  setTouched,
  touched,
  values,
}: {
  errors: FormikErrors<ShippingAddressValues>;
  setFieldValue: (field: string, value: any) => void;
  setTouched: (touched: FormikTouched<ShippingAddressValues>) => void;
  touched: FormikTouched<ShippingAddressValues>;
  values: ShippingAddressValues;
}) => {
  const err = errors.country && touched.country ? true : false;
  return (
    <FormControl style={{ width: "100%" }}>
      <InputLabel id="country-label" error={err}>
        Country
      </InputLabel>
      <Select
        error={err}
        id="country-input"
        labelId="country"
        onBlur={() => setTouched({ ...touched, country: true })}
        onChange={({ target }) => setFieldValue("country", target.value)}
        value={values?.country}
        input={<OutlinedInput label="Country" error={err} />}
      >
        {countryOptions.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {errors.country && touched.country && (
        <FormHelperText error={err}>{errors?.country}</FormHelperText>
      )}
    </FormControl>
  );
};

export default FormSelect;
