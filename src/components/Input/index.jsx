import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import { ReactComponent as Magnifier } from '../../assets/svg/magnifier.svg';
import { ReactComponent as Location } from '../../assets/svg/location.svg';

import './Input.scss';

export const InputVariants = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const InputTypes = {
  LOCATION: 'location',
  MAGNIFIER: 'magnifier',
};

const Input = ({
  variant = InputVariants.light,
  type = InputTypes.LOCATION,
  ...rest
}) => {
  return (
    <div className={`input input--${variant}`}>
      <div className='input__icon-wrapper'>
        {type === 'location' ? (
          <Location className='input__icon' />
        ) : (
          <Magnifier className='input__icon' />
        )}
      </div>
      <input {...rest} className='input__field' />
    </div>
  );
};

Input.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
};

export default Input;

// import React from 'react';
// import PropTypes from 'prop-types';
// import Icon from '../../helpers/Icon';

// import './Input.scss';

// const Input = ({ variant = 'light', iconType, ...rest }) => {
//   return (
//     <div className={`input input--${variant}`}>
//       {iconType && (
//         <div className='input__icon-wrapper'>
//           <Icon name={iconType} className='input__icon' />
//         </div>
//       )}
//       <input {...rest} className='input__field' />
//     </div>
//   );
// };

// Input.propTypes = {
//   variant: PropTypes.string,
//   iconType: PropTypes.string,
// };

// export default Input;
