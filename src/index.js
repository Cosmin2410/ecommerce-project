import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="commerce-js.us.auth0.com"
    clientId="WI52DXM3NT95lwAbJ2IO4EnsmLKbEg2g"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
