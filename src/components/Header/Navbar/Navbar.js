import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import useAuth from "../../../hooks/useAuth";
import "../Navbar/Navbar.scss";
import Searchbar from "../Searchbar/Searchbar";

const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const [active, setActive] = useState(false);

  const logout = (e) => {
    e.preventDefault();
    setAuth(false);
  };

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <nav className="mainNavbar navbar justify-content-between align-items-center">
      <button className="mainNavbar__hamburger" onClick={showMenu}>
        {active ? (
          <RxCross1 className="w-100 h-100" />
        ) : (
          <RxHamburgerMenu className="w-100 h-100" />
        )}
      </button>
      <ul
        className={
          active
            ? "mainNavbar__navigation mainNavbar__navigation--open text-center m-0 p-0"
            : "mainNavbar__navigation text-center m-0 p-0"
        }
      >
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/"
          >
            Home
          </NavLink>
        </li>

        {auth ? (
          <>
            <li className="mainNavbar__link">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/bag"
              >
                My cart
              </NavLink>
            </li>
            <li className="mainNavbar__link">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/login"
                onClick={logout}
              >
                Log out
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="mainNavbar__link">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/login"
              >
                Log in
              </NavLink>
            </li>
            <li className="mainNavbar__link">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/register"
              >
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
      <Searchbar/>
    </nav>
  );
};

export default Navbar;
