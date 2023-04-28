import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const listOfItems = useNavigate();

  const inputSearch = (e) => {
    listOfItems(`/wyszukaj/${inputValue}`);
    console.log(inputValue);
  };

  const onKeyDownHandler = e => {
    if (e.key === 'Enter') {
      inputSearch();
    }
  }

  const focusInput = () => {
    inputRef.current.focus();
  }

  useEffect(() => {
    focusInput()
  }, []);

  return (
    <nav className="mainNavbar navbar justify-content-between pt-5 pb-5">
      <div>
        <NavLink
          to="/"
          className="text-light text-decoration-none"
        >
          Strona główna
        </NavLink>
        <NavLink
          to="/zaloguj"
          className="text-light text-decoration-none ms-3"
        >
          Zaloguj
        </NavLink>
      </div>

      <div className="d-flex flex-row">
        <input
          className="me-2"
          ref={inputRef}
          type="text"
          placeholder="Szukaj"
          aria-label="Search"
          onKeyDown={onKeyDownHandler}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="btn btn-outline-primary my-2 my-sm-0"
          onClick={inputSearch}
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
