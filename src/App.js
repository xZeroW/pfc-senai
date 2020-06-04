/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from 'styles/global';
import PrivateRoute from '_components/PrivateRoute';
import { history } from '_helpers/history';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Dashboard from 'pages/Dashboard';
import Navbar from 'components/Navbar';

// const NavRoute = ({exact, path, component: Component}) => (
//   <Route exact={exact} path={path} render={(props) => (
//     <div>
//       <Navbar/>
//       <Component {...props}/>
//     </div>
//   )}/>
// );

function App() {
  return (
    <BrowserRouter history={history}>
      <GlobalStyle />
      <Navbar/>
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
  );
}

export default App;
