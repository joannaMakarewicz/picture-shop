import React, { useState, useEffect } from "react";
import ContentButtons from "./ContentButtons/ContentButtons";
import axios from "axios";
import "../Content/Content.css";


const Content = ({buyPicture}) => {

  const [pictures, setPictures] = useState([]);

  const api =
    "https://api.unsplash.com/search/photos/?query=nature&client_id=Igb2O9bvv--aTkQpflm0vddn4KFisZeUK8myMxOpWlA&";

  const getPicture = async () => {
    await axios.get(api).then((response) => {
      setPictures(response.data.results);
      console.log(response.data.results);
    });
  };



  useEffect(() => {
    getPicture();
  }, []);



  return (
    <div className="content">
      {pictures.map((picture, index) => {
        return (
          <div className="card m-3" key={index}>
            <img
              className="content__image card-img-top"
              src={picture.urls.small}
              alt="random example"
            />
            <div className="card-body">
              <h5 className="card-title">Tytuł</h5>
              <p className="card-text">{picture.alt_description}</p>
              <ContentButtons buyPicture={() => buyPicture()} picture={picture}/>
            </div>
          </div>
        );
      })}
      ,
    </div>
  );
};

export default Content;
