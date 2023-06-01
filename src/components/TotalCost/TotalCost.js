import React, { useEffect, useState } from "react";

const TotalCost = ({ pictures }) => {
  const priceArray = [];
  let purchaseHistory = [];
  let totalSum = 0;

  pictures.map((picture) => {
    purchaseHistory = JSON.parse(
      localStorage.getItem(`purchase: ${picture.id}`)
    );
    if (purchaseHistory === true) {
      priceArray.push(picture.fields.price);
    }
    return priceArray;
  });

  for (let i = 0; i < priceArray.length; i++) {
    totalSum += priceArray[i];
  }

  return (
    <>
      <div className="p-2">
        <h2>ORDER SUMMARY</h2>
        {totalSum > 0 ? (
          <>
            <p>Subtotal: {totalSum}</p>
            <p>Do you have a Promo Code?</p>
            <p className="border-top pt-3 text-end">Total: </p>
          </>
        ) : (
          <p>Your bag is empty</p>
        )}
      </div>
    </>
  );
};

export default TotalCost;
