import React from 'react';
import PropTypes from 'prop-types';

import LoginComponent from '../../components/LoginComponent';

import './Login.scss';

const Login = ({ loginUser, setEmail, setPassword, error }) => {
  return (
    <div className='login'>
      LOGIN
      <LoginComponent
        loginUser={loginUser}
        setEmail={setEmail}
        setPassword={setPassword}
        error={error}
      />
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
