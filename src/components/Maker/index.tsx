import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import styles from './Maker.module.css';

const Maker = ({ authService }: any) => {
  return (
    <section className={styles.maker}>
      <Header authService={authService} />
      <Footer />
    </section>
  );
};

export default Maker;
