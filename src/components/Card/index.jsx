import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as MiddleDot } from '../../assets/svg/middle-dot.svg';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import Icon from '../../components/Icon';

import './Card.scss';

export const CardTypes = {
  LIGHT: 'light',
  DARK: 'dark',
};

const Card = ({ cardInfo, variant }) => {
  return (
    <div className={`card card--${variant}`}>
      <Icon className='card__image' name={cardInfo.testId} />
      <div className='card__content'>
        <div className='card__info'>
          <span className='card__time'>{cardInfo.time}</span>
          <MiddleDot className='card__middle-dot' />
          <span className='card__engagement'>{cardInfo.engagement}</span>
        </div>
        <Link to={`${routes.TEST}/${cardInfo.testId}`}>
          <h3 className='card__title'>{cardInfo.title}</h3>
        </Link>
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
