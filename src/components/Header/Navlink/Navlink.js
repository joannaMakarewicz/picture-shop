import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = ({link, linkName, onClick}) => {
  return (
    <li className="mainNavbar__link">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to={link}
        onClick={onClick}
      >
        {linkName}
      </NavLink>
    </li>
  );
};

export default Navlink;
