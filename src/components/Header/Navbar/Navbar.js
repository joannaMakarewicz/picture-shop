import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const listOfItems = useNavigate();

  const inputSearch = (e) => {
    listOfItems(`/wyszukaj/${inputValue}`);
    console.log(inputValue);
  };

  return (
    <nav className="mainNavbar navbar justify-content-between p-5">
      <Link
        to="/zaloguj"
        className="navbar__link text-light text-decoration-none"
      >
        Zaloguj
      </Link>
      <div className="d-flex flex-row">
        <input
          className="me-2"
          ref={inputRef}
          type="text"
          placeholder="Search"
          aria-label="Search"
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
