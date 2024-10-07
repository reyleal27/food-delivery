import { Typography, TextField, Button } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";

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
    <div>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", marginBottom: "16px" }}
      >
        Login
      </Typography>
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
            margin="normal"
          />
          <Button
            sx={{ marginTop: "10px", color: "white", padding: "1rem" }}
            fullWidth
            type="submit"
            variant="contained"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Form>
      </Formik>
      <Typography
        variant="body2"
        sx={{ marginTop: "1rem", textAlign: "center" }}
      >
        Don't have an account?{" "}
        <Link
          to="/account/register"
          className="text-red-500 underline uppercase"
        >
          Register
        </Link>
      </Typography>
    </div>
  );
};

export default Login;
