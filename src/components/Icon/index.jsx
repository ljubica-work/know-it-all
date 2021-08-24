import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CSS } from '../../assets/svg/css.svg';
import { ReactComponent as Html } from '../../assets/svg/html.svg';
import { ReactComponent as Javascript } from '../../assets/svg/javascript.svg';

import { ReactComponent as Email } from '../assets/svg/email.svg';
import { ReactComponent as Password } from '../assets/svg/padlock.svg';
import { ReactComponent as Magnifier } from '../assets/svg/magnifier.svg';
import { ReactComponent as Location } from '../assets/svg/location.svg';

const iconTypes = {
  css: CSS,
  html: Html,
  javascript: Javascript,
};

const Icon = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
