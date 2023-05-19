import React, { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import useAuth from "../../../hooks/useAuth";
import "../ContentButtons/ContentButtons.css";

const ContentButtons = ({ picture }) => {
  const [auth] = useAuth();
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
  localStorage.setItem(
    `purchase: ${picture.id}`,
    JSON.stringify(boughtPicture)
  );

  const counter = () => {
    setLikes(!likes);
  };

  const buyPicture = () => {
    setBoughtPicture(!boughtPicture);
  };


  return (
    <div>
      <div className="d-flex justify-content-between align-items-end">
        <div className="text-center">
          {likes === false ? (
            <BsHeart className="text-end" onClick={counter} />
          ) : (
            <BsHeartFill className="heart text-end" onClick={counter} />
          )}

          <div className="m-0">
            {likes === false ? (
              <p className="m-0">{picture.fields.likes}</p>
            ) : (
              <p className="m-0">{picture.fields.likes + 1}</p>
            )}
          </div>
        </div>
        {auth ? (
          <div>
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
        ) : (
          <div>
            <button
              type="button"
              className="contentButtons__button btn btn-secondary ps-4 pe-4"
              data-toggle="tooltip"
              data-placement="top"
              title="Log-in for buying"
            >
              Buy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentButtons;
