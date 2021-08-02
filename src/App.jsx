import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes';

import Login from './components/Login';
import Registration from './components/Registration';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Test from './pages/Test';

import Signup from './pages/Signup';

const App = () => {
  // return (
  //   <div className='App'>
  //     <Login />
  //     <hr />
  //     <Registration />
  //   </div>
  // );

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
          <Login />
        </Route>
        <Route path={routes.SIGNUP}>
          <Signup />
        </Route>
        <Route path={routes.DASHBOARD}>
          <Dashboard />
        </Route>
        <Route path={routes.TEST}>
          <Test />
        </Route>
      </Switch>
    </>
  );
};

export default App;
