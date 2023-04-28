import React from "react";
import ContentButtons from "./ContentButtons/ContentButtons";
import "../Content/Content.css";

const Content = ({ buyPicture, pictures }) => {
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
            <div className=" card-body">
              <h5 className="card-title">
                {picture.tags[0].title.toUpperCase() === "NATURE"
                  ? picture.tags[1].title.toUpperCase()
                  : picture.tags[0].title.toUpperCase()}
              </h5>
              <p className="card-text">{picture.alt_description}</p>
              <ContentButtons
                buyPicture={() => buyPicture()}
                picture={picture}
              />
            </div>
          </div>
        );
      })}
      ,
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.pictures === nextProps.pictures;
}

export default React.memo(Content, areEqual);

