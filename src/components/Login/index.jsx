import React, { useState } from 'react';
import { auth } from '../../firebase';
import useStateWithLocalStorage from '../../helpers/useStateWithLocalStorage';
import { isEmailInvalid } from '../../helpers/validations';

const Login = () => {
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
    <div>
      <form onSubmit={(e) => loginUser(e)}>
        <input
          type='email'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='pass'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Log In</button>
        {error}
      </form>
    </div>
  );
};

export default Login;
