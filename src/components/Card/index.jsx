import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as MiddleDot } from '../../assets/svg/middle-dot.svg';

import './Card.scss';

const Card = ({ cardInfo, variant = 'light' }) => {
  return (
    <div className={`card card--${variant}`}>
      <img
        src={`images/${cardInfo.image}`}
        alt='card logo'
        className='card__image'
      />
      <div className='card__content'>
        <div className='card__info'>
          <span className='card__time'>
            {cardInfo.numberOfQuestions} questions
          </span>
          <MiddleDot className='card__middle-dot' />
          <span className='card__engagement'>{cardInfo.level} level</span>
        </div>
        <a href='https://resources.workable.com/senior-software-engineer-job-description'>
          <h3 className='card__title'>{cardInfo.name}</h3>
        </a>
        <span className='card__company'>{cardInfo.description}</span>
        <span className='card__location'>Duration: {cardInfo.duration}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardInfo: PropTypes.object,
  variant: PropTypes.string,
};
export default Card;
