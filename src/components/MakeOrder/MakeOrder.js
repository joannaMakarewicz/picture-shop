import React from "react";
import "../MakeOrder/MakeOrder.scss";
import Order from "../Order/Order";

const MakeOrder = ({ pictures }) => {

  const picturesHistory = pictures;

  return (
    
    <section className="makeOrder">
      <article className="mt-5">
            <div className="alert alert-success text-center mt-3">
              <h3>Your order has been sent</h3>
              <p>Thank you for your trust in our service</p>
            </div>
            <div className="mt-5">
              <h4 className="makeOrder__details">Detalis of your order:</h4>
              <Order pictures={picturesHistory} />
            </div>
      </article>
    </section>
  );
};

export default MakeOrder;
