import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthService from './service/auth_service';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/ImageFileInput';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = (props: any) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App FileInput={FileInput} authService={authService} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
