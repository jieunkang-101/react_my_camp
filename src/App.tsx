import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import Login from './components/Login';
import Maker from './components/Maker';

const App = ({ authService }: any) => {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
