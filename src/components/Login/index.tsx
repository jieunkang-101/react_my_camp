import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Login = ({ authService }: any) => {
  const onLogin = (event: any) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log('test'));
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
