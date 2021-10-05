import React from 'react';

import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
  return (
  <Spinner animation="border" size="lg" variant="primary">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  );
};

export default LoadingSpinner;