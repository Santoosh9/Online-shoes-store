import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../layouts/authentication/Register';
import Login from '../layouts/authentication/Login';
import PasswordReset from '../layouts/authentication/PasswordReset';
import ForgotPassword from '../layouts/authentication/ForgotPassword';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
