import React from 'react';
import PropTypes from 'prop-types';

import LoginComponent from '../../components/LoginComponent';
import Header from '../../components/Header';

import './Login.scss';

const Login = ({ loginUser, error }) => {
  return (
    <div className='login'>
      <Header />
      <div className='login__wrapper'>
        <LoginComponent loginUser={loginUser} error={error} />
      </div>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  error: PropTypes.string,
};

export default Login;
