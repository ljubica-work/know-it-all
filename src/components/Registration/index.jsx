import React, { useState } from 'react';
import { auth } from '../../firebase';
import {
  isEmailInvalid,
  isPasswordInvalid,
  isEmpty,
} from '../../helpers/validations';

const Registration = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    repeatedPassword: '',
  });
  const [error, setError] = useState('');

  // const handleError = (error) => {
  //   console.log(error);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmailInvalid(credentials.email)) {
      setError(isEmailInvalid(credentials.email));
    } else if (isPasswordInvalid(credentials.password)) {
      setError(isPasswordInvalid(credentials.password));
    } else if (isEmpty(credentials.email)) {
      setError(isEmpty(credentials.email));
    } else {
      auth
        .createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then((res) => {
          const user = auth.currentUser;
          return user.updateProfile({
            displayName: credentials.username,
          });
        })
        .catch((err) => setError(err.message));
    }
  };

  const handleChange = (e) => {
    setError('');
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type='text'
        placeholder='username'
        name='username'
        onChange={(e) => handleChange(e)}
      />
      <input
        type='email'
        placeholder='email'
        name='email'
        onChange={(e) => handleChange(e)}
      />
      <input
        type='password'
        placeholder='password'
        name='password'
        onChange={(e) => handleChange(e)}
      />
      <input
        type='password'
        placeholder='repeat password'
        name='repeatedPassword'
        onChange={(e) => handleChange(e)}
      />
      <button type='submit'>register</button>
      {error}
    </form>
  );
};

export default Registration;
