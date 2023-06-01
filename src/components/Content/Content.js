import React, { useEffect, useState }from "react";
import ContentButtons from "./ContentButtons/ContentButtons";
import useAuth from "../../hooks/useAuth";
import "../Content/Content.css";

const Content = ({ pictures }) => {
  const [auth] = useAuth();



  return (
    <main className="content text-dark">
      {pictures.map((picture, index) => {
        return (
          <section className="card border-0 rounded-top" key={index}>
            <header className="content__frame rounded-top">
              <img
                className="content__image card-img-top"
                src={picture.fields.pictures[0].url}
                alt="random example"
              />
            </header>

            <article className=" card-body">
              <div className="d-flex justify-content-between align-items-center mb-4 mt-2">
                <h2 className="card-title m-0">
                  {picture.fields.name.toUpperCase()}
                </h2>
                {auth ? (
                  <p className="card-text">{picture.fields.price}$</p>
                ) : (
                  <span
                    className="btn btn-light"
                    data-toggle="tooltip"
                    data-html="true"
                    title="Sign in for checking price"
                  >
                    XXX$
                  </span>
                )}
              </div>

              <p className="card-text content__description m-0">
                {picture.fields.description}
              </p>
              <ContentButtons picture={picture} />
            </article>
          </section>
        );
      })}
    </main>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.pictures === nextProps.pictures;
};

export default React.memo(Content, areEqual);
