import React from 'react';
import { Navigate } from 'react-router-dom';
const TOKEN = 'authToken';

const PrivateRoutes = ({ children }) => {
  const token = sessionStorage.getItem(TOKEN);
  return token !== null ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
