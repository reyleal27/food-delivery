import { Button, Modal, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const AddressModal = ({ handleClose }) => {
  const initialValues = {
    street: "",
    city: "",
    state: "",
    zip: "",
  };

  const validationSchema = Yup.object({
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("ZIP code is required"),
  });

  const handleSubmit = () => {};

  return (
    <Modal
      open
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid size={12}>
              <Field
                as={TextField}
                name="street"
                label="street"
                fullWidth
                variant="outlined"
                error={!!(<ErrorMessage name="street" />)}
                helperText={
                  <ErrorMessage name="street">
                    {(msg) => <span className="text-red-600">{msg}</span>}
                  </ErrorMessage>
                }
              ></Field>
            </Grid>
            <Grid size={6}>
              <Field
                as={TextField}
                name="city"
                label="city"
                fullWidth
                variant="outlined"
                error={!!(<ErrorMessage name="city" />)}
                helperText={
                  <ErrorMessage name="city">
                    {(msg) => <span className="text-red-600">{msg}</span>}
                  </ErrorMessage>
                }
              ></Field>
            </Grid>
            <Grid size={6}>
              <Field
                as={TextField}
                name="state"
                label="state"
                fullWidth
                variant="outlined"
                error={!!(<ErrorMessage name="state" />)}
                helperText={
                  <ErrorMessage name="state">
                    {(msg) => <span className="text-red-600">{msg}</span>}
                  </ErrorMessage>
                }
              ></Field>
                      </Grid>
                      <Grid size={12}>
              <Field
                as={TextField}
                name="zip"
                label="zip"
                fullWidth
                variant="outlined"
                error={!!(<ErrorMessage name="zip" />)}
                helperText={
                  <ErrorMessage name="zip">
                    {(msg) => <span className="text-red-600">{msg}</span>}
                  </ErrorMessage>
                }
              ></Field>
                      </Grid>
                      <Grid size={12}>
                          <Button variant="contained" fullWidth type="submit" color="primary">Deliver Here</Button>
                      </Grid>
                     
          </Grid>
        </Formik>
      </Box>
    </Modal>
  );
};

export default AddressModal;
