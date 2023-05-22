import React from "react";
import "../BoughtItem/BoughtItem.css"

const BoughtItem = ({ pictures }) => {
  return (
    <div className="boughtItem bg-primary pb-4 border-bottom">
      <img src="/" className="p-2" alt="selected item"/>
      <div className="p-2">
        <p >Nazwa obrazu</p>
        <p>Opis obrazu.</p>
      </div>
    <p className="p-2 text-end">Cena</p>
    </div>
  );
};

export default BoughtItem;
