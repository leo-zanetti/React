import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from '@mui/material';
import styles from '../styles.module.scss';
import UserIcon from '../../assets/icons/UserIcon.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const ADMIN = 'admin';
const admin = { username: 'admin', password: 'admin' };

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  localStorage.setItem('admin', JSON.stringify(admin));
  const handleSubmit = async (e) => {
    e.preventDefault();
    const adminUser = await JSON.parse(localStorage.getItem(ADMIN));
    if (
      adminUser?.username !== credentials.username ||
      adminUser?.password !== credentials.password
    ) {
      setError(true);
    } else {
      console.log('success');
    }
  };
  return (
    <>
      <Card>
        <div className={styles.loginForm}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <h1>Login</h1>
            <img src={UserIcon} alt="User Icon" />
          </div>
          <div className={styles.loginFields}>
            <InputLabel htmlFor="filled-adornment-username">Username</InputLabel>
            <OutlinedInput
              id="filled-adornment-username"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" edge="end">
                    <AccountCircleIcon />
                  </IconButton>
                </InputAdornment>
              }
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            {error && <span className={styles.invalidCredentials}>Invalid credentials.</span>}
            <Button variant="contained" onClick={handleSubmit}>
              Login
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default LoginForm;
