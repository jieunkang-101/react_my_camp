import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import firebase from 'firebase/app';
import styles from './Login.module.css';

const Login = ({ authService }: any) => {
  const onLogin = (event: any) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((result: any) => {
        const credential: firebase.auth.OAuthCredential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(token, user);
      })
      .catch((error: any) => {
        console.error('Login Error', error.message);
      });
  };

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
