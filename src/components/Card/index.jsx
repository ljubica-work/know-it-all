import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as MiddleDot } from '../../assets/svg/middle-dot.svg';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import cx from 'classnames';

import Icon from '../../helpers/Icon';

import './Card.scss';

const Card = ({ cardInfo, variant = 'light', className }) => {
  const cardClasses = cx({
    card: true,
    [`card--${variant}`]: true,
    [className]: className,
  });

  return (
    <div className={cardClasses}>
      <Icon className='card__image' name={cardInfo.id} />
      <div className='card__content'>
        <div className='card__info'>
          <span className='card__time'>
            {cardInfo.numberOfQuestions} questions
          </span>
          <MiddleDot className='card__middle-dot' />
          <span className='card__engagement'>{cardInfo.level} level</span>
        </div>
        <Link to={`${routes.TEST}/${cardInfo.id}`}>
          <h3 className='card__title'>{cardInfo.name}</h3>
        </Link>
        <span className='card__company'>{cardInfo.description}</span>
        <span className='card__location'>Duration: {cardInfo.duration}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardInfo: PropTypes.object,
  variant: PropTypes.string,
  className: PropTypes.string,
};
export default Card;
