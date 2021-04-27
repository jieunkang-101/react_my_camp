import React from 'react';
import styles from './App.module.css';
import Login from './components/Login';

const App = ({ authService }: any) => {
  return (
    <div className={styles.app}>
      <Login authService={authService} />
    </div>
  );
};

export default App;
