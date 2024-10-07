import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal,Box } from '@mui/material';
import RegisterForm from '../RegisterForm/RegisterForm';
import Login from '../LoginForm/Login';


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

const ModalComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnClose = () => {
        navigate('/')
    }
  return (
      <Modal open={
          location.pathname === "/account/register" || location.pathname === "/account/login"

      }
      onClose={handleOnClose}>
          <Box sx={style}>
              {location.pathname === '/account/register' ? <RegisterForm/> : <Login/>}
          </Box>
    </Modal>
  )
}

export default ModalComponent;