import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from 'styles/global';
import PrivateRoute from '_components/PrivateRoute';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Dashboard from 'pages/Dashboard';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          {/* <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path="/builds" component={BuildList} />
          
          <Route exact path="/builds/:buildId" component={BuildDetail} /> */}
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
