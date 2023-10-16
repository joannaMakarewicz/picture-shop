import React from "react";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import Navbar from "../../components/Header/Navbar/Navbar";
import TotalCost from "../../components/TotalCost/TotalCost";
import Order from "../../components/Order/Order";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import "../Summary/Summary.scss";

const Summary = ({ pictures }) => {

  useWebsiteTitle("Order summary");

  const navigate = useNavigate();

  const makeOrder = () => {
    
    navigate("/order");
  };

  return (
    <div className="summary container-lg text-light">
      <Navbar />
      <h1 className="summary__heading mt-3 mb-3">Your card:</h1>
      <main className="summary__content">
        <Order pictures={pictures} />
        <TotalCost pictures={pictures} />
        <Button onClick={makeOrder} />
      </main>
    </div>
  );
};

export default Summary;
