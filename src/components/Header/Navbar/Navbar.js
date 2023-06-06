import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import useAuth from "../../../hooks/useAuth";
import Searchbar from "../Searchbar/Searchbar";
import Navlink from "../Navlink/Navlink";
import "../Navbar/Navbar.scss";

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
        <Navlink linkName={"Home"} link={"/"} />

        {auth ? (
          <>
            <Navlink linkName={"My cart"} link={"/bag"} />
            <Navlink linkName={"Log out"} onClick={logout} link={"/login"} />
          </>
        ) : (
          <>
            <Navlink linkName={"Log in"} link={"/login"} />
            <Navlink linkName={"Register"} link={"/register"} />
          </>
        )}
      </ul>
      <Searchbar />
    </nav>
  );
};

export default Navbar;
