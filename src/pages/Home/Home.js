import React from "react";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

const Home = (props) => {
  useWebsiteTitle('Strona główna')

  return <div className="container-lg">{props.children}</div>;
};

export default Home;
