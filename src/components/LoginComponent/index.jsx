import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import Button from '../Button';

import './LoginComponent.scss';

const LoginComponent = ({ loginUser, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='login-component'>
      <h1 className='login-component__title'>Log In</h1>
      <form
        onSubmit={(e) => loginUser(e, email, password)}
        className='login-component__form'
      >
        <div className='login-component__input'>
          <Input
            placeholder='Email'
            type='email'
            iconType='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Input
          type='password'
          placeholder='Password'
          iconType='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type='submit'>Log In</Button>
        <span className='login-component__error'>{error}</span>
      </form>
    </div>
  );
};

LoginComponent.propTypes = {
  loginUser: PropTypes.func,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  error: PropTypes.string,
};

export default LoginComponent;
