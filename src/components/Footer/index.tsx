import React, { memo } from 'react';
import styles from './Footer.module.css';

const Footer = memo(() => (
  <footer className={styles.footer}>
    <p className={styles.title}>Footer</p>
  </footer>
));

export default Footer;
