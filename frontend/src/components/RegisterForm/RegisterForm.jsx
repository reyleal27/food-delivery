import {
  Typography,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  IconButton,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { registerUser } from "../State/Authentication/Action";



const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "",
};

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Name length must be at least 2 characters long")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must contain 6 or more characters!")
    .required("Password is required"),
  role: Yup.string()
    .oneOf(["ROLE_CUSTOMER", "ROLE_RESTAURANT_OWNER"], "Invalid role")
    .required("Role is required"),
});

const RegisterForm = () => {
 
    const [isPswdShown, setIsPswdShown] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleSubmit = async (values) => {
        try {
            console.log("form values", values)
        dispatch(registerUser({userData: values, navigate}))
        } catch (error) {
            console.log(error.message)
        }
        
    }
  

  return (
    <div>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", marginBottom: "16px" }}
      >
        Register
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
              validationSchema={SignupSchema}
              
        //       onSubmit={(values, actions) => {
        //   dispatch(handleRegistration(values)).then(a => {
        //     if (a?.type === 'auth/signup/rejected') {
        //       setErrorMessage(a?.payload);
        //     }else if (a?.type === 'auth/signup/fulfilled') {
        //     console.log('User payload:', a.payload.user); // Log the user payload
        // }
        //     console.log(errorMessage);
        //   });
        //   actions.resetForm();
        // }}
      >
        <Form>
          <Field
            as={TextField}
            name="fullName"
            label="full name"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
                      as={TextField}
                      type='email'
            name="email"
            label="email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            type={isPswdShown ? "text" : "password"}
            name="password"
            label="password"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <IconButton
            onClick={() => setIsPswdShown(!isPswdShown)}
                      sx={{ position: "absolute", top: "265px", left: "80%" }}
                    //   sx={{ position: "absolute", top: "60%", right: "10px", transform: "translateY(-50%)" }}
          >
            {isPswdShown ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>

          <FormControl fullWidth margin="normal">
            <InputLabel id="role-select-label">Role</InputLabel>
            <Field
                          as={Select}
                          labelId="role-select-label"
                          id="role-select"
                          name="role"
                          label="Role"
                          
                          
            >
              <MenuItem value={"ROLE_CUSTOMER"} >Customer</MenuItem>
              <MenuItem value={"ROLE_RESTAURANT_OWNER"}>
                Restaurant Owner
              </MenuItem>
            </Field>
          </FormControl>
          <Button
            sx={{ marginTop: "10px", color: "white", padding: "1rem" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            register
          </Button>
        </Form>
      </Formik>
      <Typography
        variant="body2"
        sx={{ marginTop: "1rem", textAlign: "center" }}
      >
        Already have an account?{" "}
        <Link to="/account/login" className="text-red-500 underline uppercase">
          Login
        </Link>
      </Typography>
    </div>
  );
};

export default RegisterForm;
