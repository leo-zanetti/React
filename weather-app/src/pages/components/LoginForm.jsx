import React, { useState } from 'react';
import { Card, TextField, Button } from '@mui/material';
import styles from '../styles.module.scss';
import UserIcon from '../../assets/icons/UserIcon.svg';

const LoginForm = () => {
  return (
    <>
      <Card>
        <div className={styles.loginForm}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <h1>Login</h1>
            <img src={UserIcon} alt="User Icon" />
          </div>
          <div className={styles.loginFields}>
            <span>Username</span>
            <input type="text" placeholder="Username" />
            <span>Password</span>
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default LoginForm;
