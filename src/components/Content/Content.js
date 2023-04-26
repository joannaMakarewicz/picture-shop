import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Content/Content.css";
import { BsHeart } from "react-icons/bs";

const Content = ({buyPicture}) => {
  const [likes, setLikes]=useState(0);
  
  const api =
    "https://api.unsplash.com/search/photos/?query=nature&client_id=Igb2O9bvv--aTkQpflm0vddn4KFisZeUK8myMxOpWlA&";
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const getPicture = () => {
      axios.get(api).then((response) => {
        setPictures(response.data.results);
      });
    };
    getPicture();
  }, []);

const counter = () => {
  setLikes(likes+1);
  console.log(likes)
}

  return (
    <div className="content">
      {pictures.map((picture, index) => {
        return (
          <div className="card m-3" key={index}>
            <div className="content__frame">
              <img
                className=" content__image card-img-top"
                src={picture.urls.small}
                alt="random example"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">{picture.alt_description}</p>
              <div >
                <div className="d-flex justify-content-between align-items-center">
                    <BsHeart className=" text-end" onClick={counter}/>
                    <button href="/" className="btn btn-primary" onClick={buyPicture}>
                  Buy
                </button>
                </div>
                <p className="m-0">test</p>


              </div>

            </div>
          </div>
        );
      })}
      ,
    </div>
  );
};

export default Content;
