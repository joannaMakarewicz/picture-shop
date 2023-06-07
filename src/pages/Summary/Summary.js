import React from "react";
import useWebsiteTitle from "../../hooks/useWebsiteTitle.js";
import Navbar from "../../components/Header/Navbar/Navbar.js";
import BoughtItem from "../../components/BoughtItem/BoughtItem.js";
import TotalCost from "../../components/TotalCost/TotalCost.js";
import Footer from "../../components/Footer/Footer.js";
import "../Summary/Summary.scss";

const Summary = ({ pictures }) => {

  useWebsiteTitle("Order summary");
  return (
    <div className="summary container-lg text-light">
      <Navbar />
      <h1 className="summary__heading mt-3 mb-3">Your card:</h1>
      <main className="summary__content">
        <section className="summary__content--map">
          {pictures.map((picture, index) => {
            return <BoughtItem picture={picture} key={index}/>;
          })}
        </section>

        <TotalCost pictures={pictures}/>
      </main>
      <Footer/>
    </div>
  );
};

export default Summary;
