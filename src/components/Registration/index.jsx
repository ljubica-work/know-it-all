import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Registration = ({ handleSubmit, setError, error }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    repeatedPassword: '',
  });

  const handleChange = (e) => {
    setError('');
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, credentials)}>
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

Registration.propTypes = {
  handleSubmit: PropTypes.func,
  setError: PropTypes.func,
  error: PropTypes.string,
};

export default Registration;
