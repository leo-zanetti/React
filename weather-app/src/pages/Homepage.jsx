import React from 'react';
import styles from './styles.module.scss';
import LoginForm from './components/LoginForm';

const Homepage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default Homepage;
