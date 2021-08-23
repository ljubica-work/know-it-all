import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import Button from '../Button';

import './Registration.scss';

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
    <div className='registration'>
      <h1 className='registration__title'>Sign Up</h1>
      <form
        onSubmit={(e) => handleSubmit(e, credentials)}
        className='registration__form'
      >
        <div className='registration__input'>
          <Input
            type='text'
            placeholder='Username'
            name='username'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='registration__input'>
          <Input
            type='email'
            placeholder='Email'
            name='email'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='registration__input'>
          <Input
            type='password'
            placeholder='Password'
            name='password'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='registration__input'>
          <Input
            type='password'
            placeholder='Repeat password'
            name='repeatedPassword'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <Button type='submit'>Sign Up</Button>
        <span className='registration__error'>{error}</span>
      </form>
    </div>
  );
};

Registration.propTypes = {
  handleSubmit: PropTypes.func,
  setError: PropTypes.func,
  error: PropTypes.string,
};

export default Registration;
