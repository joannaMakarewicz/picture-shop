import React from 'react';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import Navbar from '../../components/Header/Navbar/Navbar';

const Summary = () => {
  useWebsiteTitle('Podsumowanie zakupów')
  return (
    <div className='text-light'>
    <Navbar/>
      <h1>Twoje zamówienie</h1>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}

export default Summary;
