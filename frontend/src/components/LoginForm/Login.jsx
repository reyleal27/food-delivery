import { Typography, TextField, Button } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must contain 6 or more characters!")
    .required("Password is required"),
});

const Login = () => {
  const handleSubmit = () => {};
  return (
    <div className="flex flex-col items-center gap-2">
      <Typography variant="h5">Login</Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        <Form>
          <Field
            as={TextField}
            name="email"
            label="email"
            fullWidth
                      variant="outlined"
                   
                      
          />
          <Field
            as={TextField}
            name="password"
            label="password"
            fullWidth
                      variant="outlined"
                      margin='normal'
                  />
                  <Button sx={{marginTop:'10px', color:'white'} } fullWidth type='submit' variant="contained">Login</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
