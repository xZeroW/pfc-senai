/* eslint-disable react/prop-types */
import React from 'react';
import { Switch, Route  } from 'react-router-dom';

import GlobalStyle from 'styles/global';
import PrivateRoute from '_components/PrivateRoute';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Dashboard from 'pages/Dashboard';
import Project from 'pages/Project';

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
    <>
      <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/project/:id" component={Project} />
        </Switch>
    </>
  );
}

export default App;
