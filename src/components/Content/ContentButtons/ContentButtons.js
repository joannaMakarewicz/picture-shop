import React, { useState } from 'react';
import { BsHeart } from "react-icons/bs";

const ContentButtons = ({buyPicture, picture}) => {
  
    const [likes, setLikes] = useState(0);

    const counter = () => {
        setLikes(likes + 1);
      };

  return (
    <div>
    <div className="d-flex justify-content-between align-items-center">
      <BsHeart className=" text-end" onClick={counter} />
      <button
        href="/"
        className="btn btn-primary"
        onClick={buyPicture}
      >
        Buy
      </button>
    </div>
    <p className="m-0">{picture.likes+ likes}</p>
  </div>
  )
}

export default ContentButtons;
