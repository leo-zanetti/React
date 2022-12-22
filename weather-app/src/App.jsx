import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import PrivateRoutes from './Routes/PrivateRoutes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <PrivateRoutes>
            <Navbar />
            <HomePage />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}

export default App;
