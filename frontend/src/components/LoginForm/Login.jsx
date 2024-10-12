import { Typography, TextField, Button } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../State/Authentication/Action";


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
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        dispatch(loginUser({userData:values, navigate}))
    }
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
                // onSubmit={(values, actions) => {
                //     dispatch(handleLogin(values)).then(a => setErrorMessage(a?.payload));
                //     actions.resetForm();
                // }}
                validationSchema={SignupSchema}
            >
           
                {({ handleSubmit}) => (
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
                            onClick={()=> handleSubmit()}
                        >
                            Login
                        </Button>
                    </Form>
                )}
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
    )
;
};

export default Login;
