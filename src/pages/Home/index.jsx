import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import PropTypes from 'prop-types';

import './Home.scss';

const Home = ({ setCurrentUser }) => {
  const logOut = () => {
    localStorage.clear();
    setCurrentUser(null);
  };

  return (
    <div className='home'>
      HOME
      <ul>
        <li>
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={routes.LOGIN}>Login</Link>
        </li>
        <li>
          <Link to={routes.SIGNUP}>Signup</Link>
        </li>
        <li>
          <Link to={routes.DASHBOARD}>Tests</Link>
        </li>
        <li>
          <Link to={routes.TEST}>Test</Link>
        </li>
      </ul>
      <button onClick={logOut}>Log out</button>
    </div>
  );
};

Home.propTypes = {
  setCurrentUser: PropTypes.func,
};

export default Home;
