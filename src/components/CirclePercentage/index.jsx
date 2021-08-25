import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Circle } from '../../assets/svg/circle.svg';

import './CirclePercentage.scss';

const CirclePercentage = ({ percentage }) => {
  useEffect(() => {
    let offset = 440 - (440 * percentage) / 100;
    document
      .querySelector('.circle-percentage__figure')
      .children[1].style.setProperty('stroke-dashoffset', offset);
  }, [percentage]);

  return (
    <div className='circle-percentage'>
      <Circle className='circle-percentage__figure' />
      <h2 className='circle-percentage__number'>
        {percentage}
        <span className='circle-percentage__percent'>%</span>
      </h2>
    </div>
  );
};

CirclePercentage.propTypes = {
  percentage: PropTypes.number,
};

export default CirclePercentage;
