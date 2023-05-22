import React from "react";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import Navbar from "../../components/Header/Navbar/Navbar";
import BoughtItem from "../../components/BoughtItem/BoughtItem";
import TotalCost from "../../components/TotalCost/TotalCost";
import "../Summary/Summary.css"

const Summary = ({pictures}) => {
  useWebsiteTitle("Order summary");
  return (
    <div className="summary container-lg text-light">
      <Navbar />
      <h1 className="summary__heading mt-3 mb-3">Your card:</h1>
      <div className="summary__content">

              <BoughtItem pictures={pictures}/>

              <TotalCost />
      </div>
    </div>
      
  );
};

export default Summary;
