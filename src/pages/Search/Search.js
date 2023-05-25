import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Content from "../../components/Content/Content";
import Navbar from "../../components/Header/Navbar/Navbar";
import "../Search/Search.css";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import axiosInstance from "../../services/config";

const Search = ({pictures}) => {
  const { term } = useParams();
  useWebsiteTitle(`Wyszukaj: ${term}`);
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
    <div className="container search">
      <Navbar />
      <h1 className="mb-4">Wyniki dla frazy "{term}":</h1>
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
