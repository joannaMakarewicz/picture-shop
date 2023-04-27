import React, { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import "../ContentButtons/ContentButtons.css"

const ContentButtons = ({ buyPicture, picture }) => {
  const [likes, setLikes] = useState(0);

  const counter = () => {
    setLikes(likes + 1);
  };

  const totalLikes = likes + picture.likes;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
      {likes === 0
        ? <BsHeart className="text-end" onClick={counter} />
        : <BsHeartFill className="heart text-end" onClick={counter}/>
      }
        <button href="/" className="btn btn-outline-primary" onClick={buyPicture}>
          Buy
        </button>
      </div>
      <p className="m-0">{totalLikes}</p>
    </div>
  );
};

export default ContentButtons;
