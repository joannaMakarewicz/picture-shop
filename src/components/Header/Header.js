import React from "react";
import Navbar from "./Navbar/Navbar";
import "../Header/Header.scss";

const Header = () => {
  return (
    <>
    <Navbar/>
    <header className="header d-flex flex-column justify-content-center align-items-center text-center pt-4">
        <h1 className="header__heading">Art Gallery</h1>
        <p className=" ps-1 pb-5 pt-5 pe-1">Find your dream image in our Gallery</p>
    </header>
    </>
  );
};

export default Header;
