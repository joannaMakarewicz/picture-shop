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
      <div className="d-flex justify-content-between">
      <div>
      {likes === 0
        ? <BsHeart className="text-end" onClick={counter} />
        : <BsHeartFill className="heart text-end" onClick={counter}/>
      }

      <p className="m-0">{totalLikes}</p>
      </div>

        <button href="/" className="btn btn-outline-primary" onClick={buyPicture}>
          Buy
        </button>
      </div>
      
    </div>
  );
};

export default ContentButtons;
