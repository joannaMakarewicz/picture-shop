import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const listOfItems = useNavigate();

  const inputSearch = (e) => {
    listOfItems(`/wyszukaj/${inputValue}`);
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

  return (
    <nav className="mainNavbar navbar justify-content-between align-items-center pt-3 pb-3">
      <ul className="mainNavbar__list d-flex m-0 p-0">
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
              to="/koszyk"
              
            >
              My cart
            </NavLink>
          </li>
          <li>
            <a
              className="ms-5 text-light text-decoration-none"
              href="/zaloguj"
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
              to="/zaloguj"
            >
              Log in
            </NavLink>
          </li>
          <li>
            <NavLink
              className="ms-4 text-light text-decoration-none"
              to="/zarejestruj"
            >
              Register
            </NavLink>
          </li>
          </>
        )}
      </ul>

      <div className="d-flex flex-row">
        <input
          className="me-2"
          ref={inputRef}
          type="text"
          placeholder="Search"
          aria-label="Search"
          onKeyDown={onKeyDownHandler}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={inputSearch}
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
