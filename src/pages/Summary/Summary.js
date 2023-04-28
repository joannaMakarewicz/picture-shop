import React from 'react';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';

const Summary = () => {
  useWebsiteTitle('Podsumowanie zakupów')
  return (
    <div>
      <h1>Twoje zamówienie</h1>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}

export default Summary;
