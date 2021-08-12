import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as MiddleDot } from '../../assets/svg/middle-dot.svg';

import './Card.scss';

export const CardTypes = {
  LIGHT: 'light',
  DARK: 'dark',
};

const Card = ({ cardInfo, variant }) => {
  return (
    <div className={`card card--${variant}`}>
      <img
        src={`images/${cardInfo.image}`}
        alt='card logo'
        className='card__image'
      />
      <div className='card__content'>
        <div className='card__info'>
          <span className='card__time'>{cardInfo.time}</span>
          <MiddleDot className='card__middle-dot' />
          <span className='card__engagement'>{cardInfo.engagement}</span>
        </div>
        <a href='https://resources.workable.com/senior-software-engineer-job-description'>
          <h3 className='card__title'>{cardInfo.title}</h3>
        </a>
        <span className='card__company'>{cardInfo.company}</span>
        <span className='card__location'>{cardInfo.location}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardInfo: PropTypes.object,
  variant: PropTypes.string,
};
export default Card;
