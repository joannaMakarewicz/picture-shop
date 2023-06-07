import React from 'react';
import useWebsiteTitle from '../../hooks/useWebsiteTitle.js';

const ErrorPage = () => {
    useWebsiteTitle('ERROR PAGE')
  return (
    <div>
      <p>Error</p>
    </div>
  )
}

export default ErrorPage;
