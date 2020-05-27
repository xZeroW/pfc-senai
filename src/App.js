import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Home from './pages/Home';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <PrivateRoute path='/builds/create' component={BuildCreate} /> */}
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
