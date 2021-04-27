import React from 'react';
import styles from './Header.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';
import { useHistory } from 'react-router';

const Header = ({ authService }: any) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
    dispatch(logout());
    history.push('/');
  };

  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>MyCamp</h1>
    </header>
  );
};

export default Header;
