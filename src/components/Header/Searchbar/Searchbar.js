import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const listOfItems = useNavigate();

  const inputSearch = (e) => {
    listOfItems(`/search/${inputValue}`);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      inputSearch();
    }
  };

  return (
    <div className=" searchbar d-flex flex-row align-items-center">
      <input
        className="searchbar__input me-2 h-100"
        ref={inputRef}
        type="text"
        placeholder="Search"
        aria-label="Search"
        onKeyDown={onKeyDownHandler}
        onChange={(e) => setInputValue(e.target.value.toLowerCase())}
      />
      <button className="btn btn-outline-success h-100" onClick={inputSearch}>
        Search
      </button>
    </div>
  );
};

export default Searchbar;
