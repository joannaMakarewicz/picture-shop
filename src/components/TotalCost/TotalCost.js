import React, { useState } from "react";
import "../TotalCost/TotalCost.css"

const TotalCost = ({ pictures }) => {
  const [promo, setPromo] = useState(false);
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

  const havePromoCode = () => {
    setPromo(!promo);
  };

  const promoPrice = totalSum*0.9;

  return (
    <>
      <div className="p-2">
        <h2>ORDER SUMMARY</h2>
        {totalSum > 0 ? (
          <>
            <p className="d-flex justify-content-between">
              Subtotal:<span className="text-end">{totalSum}$</span>
            </p>
            <p className="d-flex justify-content-between">
              Do you have a Promo Code?
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  onChange={havePromoCode}
                />
              </div>
            </p>
            {promo ? (
              <p>
                <input className="totalCost__promo w-100" value="" placeholder="Enter your promo code"/>
              </p>
            )
            :
            null}
            <p className="border-top pt-3 text-end fs-2">Total: {promo? promoPrice : totalSum}$</p>
          </>
        ) : (
          <p>Your bag is empty</p>
        )}
      </div>
    </>
  );
};

export default TotalCost;
