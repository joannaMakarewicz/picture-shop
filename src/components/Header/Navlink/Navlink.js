import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = ({link, linkName}) => {
  return (
    <li className="mainNavbar__link">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to={link}
      >
        {linkName}
      </NavLink>
    </li>
  );
};

export default Navlink;
