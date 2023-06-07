import React from "react";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

const Home = (props) => {
  useWebsiteTitle("Home");

  return <div className="container-lg">{props.children}</div>;
};

export default Home;
