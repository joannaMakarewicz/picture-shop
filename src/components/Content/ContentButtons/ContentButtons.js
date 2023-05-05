import React, { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import "../ContentButtons/ContentButtons.css";

const ContentButtons = ({ picture }) => {
  const historyValueOfLikes = JSON.parse(
    localStorage.getItem(`likes: ${picture.id}`)
  );
  const purchaseHistory = JSON.parse(
    localStorage.getItem(`purchase: ${picture.id}`)
  );

  const [likes, setLikes] = useState(historyValueOfLikes);
  const [boughtPicture, setBoughtPicture] = useState(purchaseHistory);

  if (likes === null) {
    setLikes(false);
  }

  if (boughtPicture === null) {
    setBoughtPicture(false);
  }

  localStorage.setItem(`likes: ${picture.id}`, JSON.stringify(likes));
  localStorage.setItem(`purchase: ${picture.id}`,JSON.stringify(boughtPicture));

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

          <div className="m-0">
            {likes === false ? (
              <p>{picture.likes}</p>
            ) : (
              <p>{picture.likes + 1}</p>
            )}
          </div>
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
