import React from 'react';
import './App.css';
import Login from './components/Login';

function App({ authService }: any) {
  return <Login authService={authService} />;
}

export default App;
