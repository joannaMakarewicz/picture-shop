import React, { useState, useRef } from "react";
import { IoIosCheckmarkCircleOutline, IoIosCloseCircle } from "react-icons/io";
import "../TotalCost/TotalCost.scss";

const TotalCost = ({ pictures }) => {
  const [promo, setPromo] = useState(false);
  const [code, setCode] = useState(false);

  const priceArray = [];
  let purchaseHistory = [];
  let totalSum = 0;
  let promoPrice = totalSum;

  const inputValue = useRef();

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
    if (promo === false) {
      setCode(false);
    }
  };

  if (promo) {
    promoPrice = totalSum * 0.9;
  } else {
    promoPrice = totalSum;
  }

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      setCode(true);
    }
  };

  const addPromoCode = () => {
      setCode(!code);
  };

  return (
    <>
      <div className="p-2">
        <h2 className="totalCost__heading">ORDER SUMMARY</h2>
        {totalSum > 0 ? (
          <>
            <p className="d-flex justify-content-between">
              Subtotal:<span className="text-end">{totalSum}$</span>
            </p>
            <p className="d-flex justify-content-between">
              Do you have a Promo Code?
              <input
                className="totalCost__promoInput form-check-input"
                type="checkbox"
                onChange={havePromoCode}
              />
            </p>
            {promo ? (
              <div className="d-flex align-items-center justify-content-between mb-3 w-100">
                <p className="m-0">
                  <input
                    className="totalCost__promo"
                    placeholder="Enter your promo code"
                    onKeyDown={onKeyDownHandler}
                    id="promoInput"
                    ref={inputValue}
                  />
                  <label htmlFor="promoInput" />
                </p>
                {code ? (
                  <IoIosCloseCircle
                    className="totalCost__icon totalCost__icon--reset"
                    onClick={addPromoCode}
                  />
                ) : (
                  <IoIosCheckmarkCircleOutline
                    className="totalCost__icon"
                    onClick={addPromoCode}
                  />
                )}
              </div>
            ) : null}
            {code ? (
              <div class="alert alert-success" role="alert">
                Promo Code was added!
              </div>
            ) : null}
            <p className="totalCost__sum pt-3 text-end fs-2">
              Total: {code ? promoPrice : totalSum}$
            </p>
          </>
        ) : (
          <p>Your bag is empty</p>
        )}
      </div>
    </>
  );
};

export default TotalCost;
