import React from 'react'
import Navbar from '../../components/Header/Navbar/Navbar';
import MakeOrder from "../../components/MakeOrder/MakeOrder";


const OrderedItems = ({pictures}) => {
  return (
    <div className="text-light">
      <Navbar/>
      <MakeOrder pictures={pictures} />
    </div>
  )
}

export default OrderedItems
