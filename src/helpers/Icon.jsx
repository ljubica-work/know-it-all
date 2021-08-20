import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Email } from '../assets/svg/email.svg';
import { ReactComponent as Password } from '../assets/svg/padlock.svg';
import { ReactComponent as Magnifier } from '../assets/svg/magnifier.svg';
import { ReactComponent as Location } from '../assets/svg/location.svg';

const iconTypes = {
  email: Email,
  password: Password,
  magnifier: Magnifier,
  location: Location,
};

const Icon = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
