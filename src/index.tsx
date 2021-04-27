import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthService from './service/auth_service';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App authService={authService} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
