import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../layouts/authentication/Register';
import Login from '../layouts/authentication/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
