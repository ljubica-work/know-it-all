import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './constants/routes';
import { auth } from './firebase';
import { isEmailInvalid } from './helpers/validations';
import useStateWithLocalStorage from './helpers/useStateWithLocalStorage';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Test from './pages/Test';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useStateWithLocalStorage('user', null);

  const loginUser = (e) => {
    e.preventDefault();

    if (isEmailInvalid(email)) {
      setError(isEmailInvalid(email));
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          setCurrentUser(user.user);
        })
        .catch((err) => setError(err.message));
    }
  };
  return (
    <>
      <Switch>
        <Route exact path={routes.HOME}>
          <Home setCurrentUser={setCurrentUser} />
        </Route>
        <Route path={routes.LOGIN}>
          {currentUser ? (
            <Redirect to={routes.DASHBOARD} />
          ) : (
            <Login
              loginUser={loginUser}
              setEmail={setEmail}
              setPassword={setPassword}
              error={error}
            />
          )}
        </Route>
        <Route path={routes.SIGNUP}>
          {currentUser ? <Redirect to={routes.DASHBOARD} /> : <Signup />}
        </Route>
        <Route path={routes.DASHBOARD}>
          {currentUser ? <Dashboard /> : <Redirect to={routes.LOGIN} />}
        </Route>
        <Route path={`${routes.TEST}/:id`}>
          {currentUser ? <Test /> : <Redirect to={routes.LOGIN} />}
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
