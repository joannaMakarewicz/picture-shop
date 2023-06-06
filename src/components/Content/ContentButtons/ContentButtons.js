import React, { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { SlBasket } from "react-icons/sl"
import useAuth from "../../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import "../ContentButtons/ContentButtons.scss";

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
    <div className="mt-2">
      <div className="d-flex justify-content-between align-items-end">
        <div className="text-center">
          {likes ? (
            <BsHeartFill className="heart text-end" onClick={counter} />
          ) : (
            <BsHeart className="heart__white text-end" onClick={counter} />
          )}

          <div className="m-0">
            {likes ? (
              <p className="m-0">{picture.fields.likes + 1}</p>
            ) : (
              <p className="m-0">{picture.fields.likes}</p>
            )}
          </div>
        </div>
        {auth ? (
          <div>
            {boughtPicture ? (
              <button
                href="/"
                className="contentButtons__button btn btn-success"
                onClick={buyPicture}
              >
                <SlBasket/>
              </button>
            ) : (
              <button
                href="/"
                className="contentButtons__button btn btn-outline-success"
                onClick={buyPicture}
              >
                <SlBasket/>
              </button>
            )}
          </div>
        ) : (
          <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title="Sign in for buying"  data-placement="top">
            <button className="contentButtons__button--disabled p-0" disabled>
              <SlBasket/>
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default ContentButtons;
