import React from 'react';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import Navbar from '../../components/Header/Navbar/Navbar';
import BoughtItem from '../../components/BoughtItem/BoughtItem';

const Summary = () => {
  useWebsiteTitle('Podsumowanie zakupów')
  return (
    <div className='container text-light'>
    <Navbar/>
      <h1 className='mt-3 mb-3'>Your card:</h1>
<BoughtItem/>
    </div>
  )
}

export default Summary;
