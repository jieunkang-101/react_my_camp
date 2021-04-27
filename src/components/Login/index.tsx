import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import firebase from 'firebase/app';

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
    <section>
      <Header />
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
