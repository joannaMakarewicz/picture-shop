import React from "react";

const Navbar = () => {
  return (
    <nav className="mainNavbar navbar justify-content-between p-5">
      <a href="/" className="navbar__link text-light text-decoration-none">
        Zaloguj
      </a>
      <form className="form d-flex flex-row">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
