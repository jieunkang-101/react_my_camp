import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Login.module.css';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';
import { useAppSelector } from '../../redux/hooks';

const Login = ({ authService }: any) => {
  const idToken = useAppSelector((state) => state.user.idToken);
  const uid = useAppSelector((state) => state.user.uid);
  const isAuthenticated = !idToken ?? false;

  const history = useHistory();
  const goToMaker = (userId: string) => {
    history.push({
      pathname: '/maker',
      state: { id: userId },
    });
  };

  const dispatch = useDispatch();

  const onLogin = (event: any) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((result: any) => {
        const user = result.user;
        const credential = result.credential;
        const uid = user.uid;
        const name = user.displayName;
        const photoURL = user.photoURL;
        const idToken = credential.idToken;
        const refreshToken = user.refreshToken;
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const accessToken = result.credential.accessToken;
        goToMaker(uid);
        dispatch(login(uid, name, photoURL, idToken, refreshToken));
      })
      .catch((error: any) => {
        console.error('Login Error', error.message);
      });
  };

  // useEffect(() => {
  //   authService.onAuthChange((user: any) => {
  //     console.log('USER', user.uid);
  //   });
  // });

  return (
    <>
      {isAuthenticated ? (
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
      ) : (
        goToMaker(uid)
      )}
    </>
  );
};

export default Login;
