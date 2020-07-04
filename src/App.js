/* eslint-disable react/prop-types */
import React from 'react';
import { Router, Switch, Route  } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import GlobalStyle from 'styles/global';
import history from '_helpers/history';
import Loading from 'components/Loading';

import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import Project from 'pages/Project';

function App() {

  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/project/:id" component={Project} />
      </Switch>
    </Router>
  );
}

export default App;
