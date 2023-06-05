import React from "react";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import Navbar from "../../components/Header/Navbar/Navbar";
import BoughtItem from "../../components/BoughtItem/BoughtItem";
import TotalCost from "../../components/TotalCost/TotalCost";
import "../Summary/Summary.css";
import Footer from "../../components/Footer/Footer";

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
