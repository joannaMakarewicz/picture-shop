import React, { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import "../ContentButtons/ContentButtons.css";

const ContentButtons = ({ picture }) => {
  const [likes, setLikes] = useState(false);
  const [boughtPicture, setBoughtPicture] = useState(false);

  const totalLikes = likes + picture.likes;

  const counter = () => {
    setLikes(!likes);
  };

  const buyPicture = () => {
    setBoughtPicture(!boughtPicture);
  };

  return (
    <div>
      <div className="d-flex justify-content-between ps-3 pe-3">
        <div className="text-center">
          {likes === false ? (
            <BsHeart className="text-end" onClick={counter} />
          ) : (
            <BsHeartFill className="heart text-end" onClick={counter} />
          )}

          <p className="m-0">{totalLikes}</p>
        </div>
        {boughtPicture === false ? (
          <button
            href="/"
            className="contentButtons__button btn btn-outline-primary ps-4 pe-4"
            onClick={buyPicture}
          >
            Buy
          </button>
        ) : (
          <button
            href="/"
            className="contentButtons__button btn btn-primary ps-4 pe-4"
            onClick={buyPicture}
          >
            Buy
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentButtons;
