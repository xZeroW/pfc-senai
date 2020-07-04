import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import history from '_helpers/history';
import auth_config from './auth_config.json';

import App from './App';

import 'bootstrap-css-only/css/bootstrap.min.css';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={auth_config.domain}
    clientId={auth_config.clientId}
    audience={auth_config.audience}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
