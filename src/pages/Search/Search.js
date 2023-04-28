import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Content from "../../components/Content/Content";
import Navbar from "../../components/Header/Navbar/Navbar";
import "../Search/Search.css";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

const Search = () => {
  const { term } = useParams();
  useWebsiteTitle(`Wyszukaj: ${term}`)
  const [pictures, setPictures] = useState([]);
  
  const api =
    "https://api.unsplash.com/search/photos/?query=nature&client_id=Igb2O9bvv--aTkQpflm0vddn4KFisZeUK8myMxOpWlA&";

  const searchHandler = async () => {
    try {
      const res = await axios.get(api);
      const newPictures = res.data.results.filter((element) => {
        return element.tags[0].title.includes(term);
      });

      setPictures(newPictures);
    } catch (ex) {
      console.log(ex.response);
    }
  };

  useEffect(() => {
    searchHandler();
  }, [term]);

  return (
    <div >
    <Navbar/>
      <h2 className="search">Wyniki dla frazy "{term}":</h2>
      <Content pictures={pictures} />
    </div>
  );
};

export default Search;
