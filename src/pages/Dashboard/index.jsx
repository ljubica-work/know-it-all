import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      DASHBOARD
      <br />
      <Link to={`${routes.TEST}/css`}>CSS</Link>
      <br />
      <Link to={`${routes.TEST}/html`}>HTML</Link>
      <br />
      <Link to={`${routes.TEST}/javascript`}>JavaScript</Link>
    </div>
  );
};

export default Dashboard;
