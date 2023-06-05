import React, { useState } from "react";
import "../BoughtItem/BoughtItem.css";

const BoughtItem = ({ picture }) => {
  const purchaseHistory = JSON.parse(
    localStorage.getItem(`purchase: ${picture.id}`)
  );

  const [boughtPicture, setBoughtPicture] = useState(purchaseHistory);


  return (
    <>
      {boughtPicture ?
        <article className="boughtItem pb-4 pt-4">
            <div className="boughtItem__dropdown">
                <img
                  src={picture.fields.pictures[0].url}
                  className="boughtItem__img p-2 w-100"
                  alt="selected item"
                />
                <div className="boughtItem__content">
                    <img
                        src={picture.fields.pictures[0].url}
                        className="boughtItem__img--bigger p-2"
                        alt="selected item"
                      />
                    <div className="boughtItem__info text-dark text-capitalize">{picture.fields.name}</div>
                </div>
            </div>
            <div className="p-2">
              <h2>{picture.fields.name.toUpperCase()}</h2>
              <p className="boughtItem__description m-0">{picture.fields.description}</p>
            </div>
            <p className="p-2 text-end">{picture.fields.price}$</p>
          </article>
    :
    null
      }
    </>
  );
};

export default BoughtItem;
