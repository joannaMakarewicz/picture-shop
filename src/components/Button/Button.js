import React from "react";
import "../Button/Button.scss";

const Button = ({onClick}) => {
  return (
    <div className="button">
      <button className="btn btn-success" onClick={onClick}>
        Buy
      </button>
    </div>
  );
};

export default Button;
