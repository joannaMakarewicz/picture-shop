import React from "react";
import "../Header/Header.css";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header__content d-flex flex-column justify-content-center align-items-center text-center pt-4">
        <h1 className="header__heading">Galeria sztuki</h1>
        <p>Wybierz swój wymarzony obraz w naszej Galerii</p>
      </div>
    </header>
  );
};

export default Header;
