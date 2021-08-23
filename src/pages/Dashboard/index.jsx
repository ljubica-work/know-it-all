import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      DASHBOARD
      <br />
      <Link to={`${routes.START}/css`}>CSS</Link>
      <br />
      <Link to={`${routes.START}/html`}>HTML</Link>
      <br />
      <Link to={`${routes.START}/javascript`}>JavaScript</Link>
    </div>
  );
};

export default Dashboard;
