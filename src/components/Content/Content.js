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
              src={picture.fields.pictures[0].url}
              alt="random example"
            />
            <div className=" card-body">
              <div className="d-flex justify-content-between align-items-center mb-4 mt-2">
                <h5 className="card-title m-0">
                  {picture.fields.name.toUpperCase()}
                </h5>
                <p className="card-text">{picture.fields.price}$</p>
              </div>

              <p className="card-text content__description m-0">{picture.fields.description}</p>
              <ContentButtons picture={picture} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.pictures === nextProps.pictures;
};

export default React.memo(Content, areEqual);
