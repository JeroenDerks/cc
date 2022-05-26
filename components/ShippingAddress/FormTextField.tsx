import React from "react";
import { getIn, FieldProps } from "formik";
import { TextField } from "@mui/material";

type FormTextFieldProps = {
  multiline?: true;
  helperText?: string;
  label: string;
};

/**
 * Material TextField Component with Formik Support including Errors.
 * Intended to be specified via the `component` prop in a Formik <Field> or <FastField> component.
 * Material-UI specific props are passed through.
 */
export const FormTextField = (props: FieldProps & FormTextFieldProps) => {
  {
    const isTouched = getIn(props.form.touched, props.field.name);
    const errorMessage = getIn(props.form.errors, props.field.name);

    const { helperText, field, form, ...rest } = props;

    return (
      <TextField
        variant="outlined"
        error={isTouched && errorMessage ? true : false}
        margin="none"
        helperText={
          helperText ?? (isTouched && errorMessage ? errorMessage : undefined)
        }
        {...rest}
        {...field}
      />
    );
  }
};
