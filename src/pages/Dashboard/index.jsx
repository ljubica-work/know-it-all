import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      DASHBOARD
      <Link to={`${routes.TEST}/Test1`}>Test1</Link>
      <Link to={`${routes.TEST}/Test2`}>Test2</Link>
    </div>
  );
};

export default Dashboard;
