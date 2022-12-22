import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <div className={styles.navContainer}>
      <ul>
        <li>Weather</li>
        <li>Zip-Code</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
