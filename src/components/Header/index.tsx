import React from 'react';
import styles from './Header.module.css';

const Header = ({ onLogout }: any) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>My Campings</h1>
    </header>
  );
};

export default Header;
