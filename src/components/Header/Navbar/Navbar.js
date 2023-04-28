import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [inputValue, setInputValue] = useState('');

  // const inputSearch = () => {

  // }

  return (
    <nav className="mainNavbar navbar justify-content-between p-5">
      <Link to="/zaloguj" className="navbar__link text-light text-decoration-none">
        Zaloguj
      </Link>
      <form className="form d-flex flex-row">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange = {(e)=> setInputValue(e.target.value)}
        />
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
