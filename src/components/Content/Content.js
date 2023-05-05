import React from "react";
import ContentButtons from "./ContentButtons/ContentButtons";
import "../Content/Content.css";

const Content = ({ pictures }) => {
  return (
    <div className="content text-dark">
      {pictures.map((picture, index, boughtPicture) => {
        return (
          <div className="card" key={index}>
            <img
              className="content__image card-img-top"
              src={picture.urls.small}
              alt="random example"
            />
            <div className=" card-body">
              <h5 className="card-title">
                {picture.tags[0].title.toUpperCase() === "NATURE"
                  ? picture.tags[1].title.toUpperCase()
                  : picture.tags[0].title.toUpperCase()}
              </h5>
              <p className="card-text">{picture.alt_description}</p>
              <ContentButtons
                picture={picture}
              />
            </div>
          </div>
        );
      })}
      
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.pictures === nextProps.pictures;
}

export default React.memo(Content, areEqual);

