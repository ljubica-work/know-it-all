import React from 'react';
import PropTypes from 'prop-types';

import './Center.scss';

const Center = ({ children }) => {
  return <div className='center'>{children}</div>;
};

Center.propTypes = {
  children: PropTypes.any,
};
export default Center;
