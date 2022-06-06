import React from 'react';
import PropTypes from 'prop-types';

const Button = ({btnClicked, children}) => {
  return (<button onClick={btnClicked}>{children}</button>);
};

Button.propTypes = {
  btnClicked: PropTypes.func,
  children: PropTypes.any
};

export default Button;
