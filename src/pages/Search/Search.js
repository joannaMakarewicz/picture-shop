import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Content from "../../components/Content/Content.js";
import Navbar from "../../components/Header/Navbar/Navbar.js";
import useWebsiteTitle from "../../hooks/useWebsiteTitle.js";
import "../Search/Search.scss";

const Search = ({pictures}) => {
  const { term } = useParams();
  useWebsiteTitle(`Search: ${term}`);
  const [inputPictures, setInputPictures] = useState([]);

  const searchHandler = async () => {

      const newPictures = pictures.filter((element) => {
        return element.fields.name.includes(term);
      });

      setInputPictures(newPictures);

  };

  useEffect(() => {
    searchHandler();
  }, [term]);

  return (
    <div className="search container-lg search">
      <Navbar />
      <h1 className="mt-4 mb-4">Results for the phrase "{term}":</h1>
      <div>
        {inputPictures.length === 0
        ?
        <p>Pictures not found</p>
        :
        <Content pictures={inputPictures} />
        }
      </div>
      
    </div>
  );
};

export default Search;
