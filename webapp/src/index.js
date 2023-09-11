import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='442850253199-ru41i102591270vrha1tihoeca51h12o.apps.googleusercontent.com'>
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </GoogleOAuthProvider>
  
);


