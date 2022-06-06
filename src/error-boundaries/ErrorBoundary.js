import React from 'react';
import PropTypes from 'prop-types';

const ErrorBoundary = ({children}) => {
  const ErrorTemplate = () => (<h2>Oops... something went wrong, try to reload the page</h2>);

  const canLoad = true;

  return (<>{canLoad ? children : <ErrorTemplate />}</>);
}

ErrorBoundary.propTypes = {
  error: PropTypes.any,
  children: PropTypes.any
};

export default ErrorBoundary;
