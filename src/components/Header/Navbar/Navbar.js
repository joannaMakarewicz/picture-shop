import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';
import useAuth from "../../../hooks/useAuth";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const listOfItems = useNavigate();

  const inputSearch = (e) => {
    listOfItems(`/search/${inputValue}`);
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      inputSearch();
    }
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  const login = (e) => {
    e.preventDefault();
    setAuth(true);
  };

  const logout = (e) => {
    e.preventDefault();
    setAuth(false);
  };

  const showMenu = () => {
    const hamburger = document.querySelector(".mainNavbar__navigation");
    hamburger.classList.toggle("mainNavbar__navigation--open");
  };

  return (
    <nav className="mainNavbar navbar justify-content-between align-items-center">
      <button className="mainNavbar__hamburger" onClick={showMenu}>
        <RxHamburgerMenu className="w-100 h-100"/>
      </button>
      <ul className="mainNavbar__navigation  text-center m-0 p-0">
        <li>
          <NavLink className="text-light text-decoration-none" to="/">
            Home
          </NavLink>
        </li>

        {auth ? (
          <>
            <li>
              <NavLink
                className="ms-5 text-light text-decoration-none"
                to="/bag"
              >
                My cart
              </NavLink>
            </li>
            <li>
              <a
                className="ms-5 text-light text-decoration-none"
                href="/login"
                onClick={logout}
              >
                Log out
              </a>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                className="ms-4 text-light text-decoration-none"
                to="/login"
              >
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink
                className="ms-4 text-light text-decoration-none"
                to="/register"
              >
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
      <div className=" searchbar d-flex flex-row align-items-center">
        <input
          className="searchbar__input me-2 h-100"
          ref={inputRef}
          type="text"
          placeholder="Search"
          aria-label="Search"
          onKeyDown={onKeyDownHandler}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="btn btn-outline-success h-100"
          onClick={inputSearch}
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
