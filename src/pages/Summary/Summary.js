import React, { useState } from "react";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import Navbar from "../../components/Header/Navbar/Navbar";
import TotalCost from "../../components/TotalCost/TotalCost";
import Order from "../../components/Order/Order";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import "../Summary/Summary.scss";

const Summary = ({ pictures }) => {
  useWebsiteTitle("Order summary");
  const navigate = useNavigate();

  const historyOfBuying = pictures.map((picture) => {
    return JSON.parse(localStorage.getItem(`purchase: ${picture.id}`));
  });

  const isSthBought = historyOfBuying.filter((item) => item === true);

  const [infoAfterOrder, setInfoAfterOrder] = useState(false);

  const makeOrder = () => {
    pictures.map((picture) => {
      return localStorage.setItem(
        `purchase: ${picture.id}`,
        JSON.stringify(false)
      );
    });
    setInfoAfterOrder(true);
  };

  const goHome = () => {
    navigate("/")
  }

  return (
    <div className="summary container-lg text-light">
      <Navbar />
      {isSthBought.length>0 ? (
        <>
          <h1 className="summary__heading mt-3 mb-3">Your card:</h1>
          <main className="summary__content">
          <Order pictures={pictures}/>
          <TotalCost pictures={pictures} />
          <Button pictures={pictures} onClick={makeOrder}/>
          </main>
        </>
      ) : (
        <>
        {infoAfterOrder?<MakeOrder /> : null}
        <TotalCost pictures={pictures} />
        <button className="btn btn-success" onClick={goHome}>Find sth</button>
        </>
      )}
    </div>
  );
};

export default Summary;

