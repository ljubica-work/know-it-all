import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './constants/routes';

import Login from './components/Login';
import Registration from './components/Registration';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Test from './pages/Test';

import Signup from './pages/Signup';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <>
      <Login />
      <hr />
      <Registration />
      <Switch>
        <Route exact path={routes.HOME}>
          <Home />
        </Route>
        <Route path={routes.LOGIN}>
          {currentUser ? <Redirect to={routes.DASHBOARD} /> : <Login />}
        </Route>
        <Route path={routes.SIGNUP}>
          {currentUser ? <Redirect to={routes.DASHBOARD} /> : <Signup />}
        </Route>
        <Route path={routes.DASHBOARD}>
          {currentUser ? <Dashboard /> : <Redirect to={routes.LOGIN} />}
        </Route>
        <Route path={routes.TEST}>
          {currentUser ? <Test /> : <Redirect to={routes.LOGIN} />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
