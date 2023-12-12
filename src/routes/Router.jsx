import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../layouts/authentication/Register';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
