import React from "react";
import "../Header/Header.css";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header className="">
      <Navbar />
      <div className="header d-flex flex-column justify-content-center align-items-center text-center">
        <h1>Galeria sztuki</h1>
        <p>Wybierz swój wymarzony obraz w naszej Galerii</p>
      </div>
    </header>
  );
};

export default Header;
