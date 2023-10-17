import React, { useState, useRef } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import "../TotalCost/TotalCost.scss";

const TotalCost = ({ pictures }) => {
  const [promo, setPromo] = useState(false);
  const [code, setCode] = useState(false);

  const priceArray = [];
  let purchaseHistory = [];
  let totalSum = 0;
  let promoPrice;

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

  promoPrice = totalSum * 0.9;

  const havePromoCode = () => {
    setPromo(!promo);
    if (code === true) {
      setCode(false);
    }
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      setCode(true);
    }
  };

  const addPromoCode = () => {
    if (inputValue.current.value) {
      setCode(!code);
    }
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
                <p className="m-0 me-1">
                  <input
                    className="totalCost__promo"
                    placeholder={
                      code ? "Delete your promo code" : "Enter your promo code"
                    }
                    onKeyDown={onKeyDownHandler}
                    id="promoInput"
                    ref={inputValue}
                  />
                  <label htmlFor="promoInput" />
                </p>
                {code ? (
                  <AiOutlineMinusCircle
                    className="totalCost__icon totalCost__icon--reset"
                    onClick={addPromoCode}
                  />
                ) : (
                  <AiOutlinePlusCircle
                    className="totalCost__icon"
                    onClick={addPromoCode}
                  />
                )}
              </div>
            ) : null}
            {code ? (
              <div className="totalCost__alert alert alert-success" role="alert">
                <span>Promo Code was added - 10%</span>
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
