import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { FormTextField } from "./FormTextField";
import FormSelect from "./FormSelect";
import * as yup from "yup";

export type ShippingAddressValues = {
  companyName: string;
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  state: string;
  city: string;
  postCode: string;
  country: string;
  email: string;
  phone: string;
};
const intialValues = {
  companyName: "",
  firstName: "",
  lastName: "",
  addressLine1: "",
  addressLine2: "",
  state: "",
  city: "",
  postCode: "",
  country: "",
  email: "",
  phone: "",
};

const props = {
  component: FormTextField,
  variant: "outlined",
  fullWidth: true,
};

const validationSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  addressLine1: yup.string().required("Required"),
  city: yup.string().required("Required"),
  country: yup.string().required("Required"),
  postCode: yup.string().required("Required"),
  email: yup.string().email("Invalid email format").required("Required"),
});

const ShippingAddress = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <Formik
      initialValues={intialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched, setTouched, setFieldValue }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Field name="companyName" label="Company name" {...props} />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Field name="firstName" label="First name" {...props} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Field name="lastName" label="Last name" {...props} />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Field name="addressLine1" label="Address line 1" {...props} />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Field name="addressLine2" label="Address line 2" {...props} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Field name="state" label="State" {...props} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Field name="postCode" label="Post code" {...props} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Field name="city" label="City" {...props} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormSelect
                errors={errors}
                setFieldValue={setFieldValue}
                setTouched={setTouched}
                touched={touched}
                values={values}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Field name="email" label="Email" {...props} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                width={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
                height="100%"
              >
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  Calculate shipping
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default ShippingAddress;
