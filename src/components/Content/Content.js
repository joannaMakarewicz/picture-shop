import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Content/Content.css";

const Content = ({buyPicture}) => {
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
              <button href="/" className="btn btn-primary" onClick={buyPicture}>
                Buy
              </button>
            </div>
          </div>
        );
      })}
      ,
    </div>
  );
};

export default Content;
