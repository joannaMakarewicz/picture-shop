import React, { useEffect, useState } from "react";
import "../BoughtItem/BoughtItem.css";

const BoughtItem = ({ picture }) => {
  const purchaseHistory = JSON.parse(
    localStorage.getItem(`purchase: ${picture.id}`)
  );

  const [boughtPicture, setBoughtPicture] = useState(purchaseHistory);

  useEffect(() => {
    console.log(boughtPicture);
  });

  return (
    <>
      {boughtPicture ?
        <div className="boughtItem pb-4 pt-4 border-bottom">
      <div>
        <img
          src={picture.fields.pictures[0].url}
          className="p-2"
          alt="selected item"
        />
      </div>
      <div className="p-2">
        <p>{picture.fields.name.toUpperCase()}</p>
        <p>{picture.fields.description}</p>
      </div>
      <p className="p-2 text-end">{picture.fields.price}$</p>
    </div>
    :
    null
      }
    </>
    
    
  );
};

export default BoughtItem;
