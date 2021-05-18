import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Editor from '../Editor';
import Preview from '../Preview';
import styles from './Maker.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userSlice';
import { useHistory } from 'react-router';
import { RootState } from '../../redux/rootReducer';

const Maker = ({ authService }: any) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
    dispatch(logout());
    history.push('/');
  };

  const user = useSelector((state: RootState) => state.user.uid);

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
