import React, { useState } from "react";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import Navbar from "../../components/Header/Navbar/Navbar";
import TotalCost from "../../components/TotalCost/TotalCost";
import Order from "../../components/Order/Order";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import "../Summary/Summary.scss";

const Summary = ({ pictures }) => {
  useWebsiteTitle("Order summary");

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

  return (
    <div className="summary container-lg text-light">
      <Navbar />
      <h1 className="summary__heading mt-3 mb-3">Your card:</h1>
      <main className="summary__content">
        {infoAfterOrder ? (
          <>
            <MakeOrder />
            <TotalCost pictures={pictures} />
          </>
        ) : (
          <>
            <Order pictures={pictures} infoAfterOrder={infoAfterOrder} />
            <TotalCost pictures={pictures} />
            <Button onClick={makeOrder} />
          </>
        )}
      </main>
    </div>
  );
};

export default Summary;
