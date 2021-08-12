import React from 'react';
import PropTypes from 'prop-types';

const LoginComponent = ({ loginUser, setEmail, setPassword, error }) => {
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

LoginComponent.propTypes = {
  loginUser: PropTypes.func,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  error: PropTypes.string,
};

export default LoginComponent;
