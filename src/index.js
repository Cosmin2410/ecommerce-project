import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-g6w67-up.us.auth0.com"
    clientId="0kASlQJyOrhLgsSlCzy8DZ6IlJ9FHtIf"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
