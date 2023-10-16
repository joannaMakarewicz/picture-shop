import React from 'react';
import BoughtItem from '../BoughtItem/BoughtItem';
import "../Order/Order.scss";

const Order = ({pictures}) => {
  return (
    <div className="summary__content--map">
    {pictures.map((picture, index) => {
      return <BoughtItem picture={picture} key={index}/>;
    })}
  </div>

  )
}

export default Order;
