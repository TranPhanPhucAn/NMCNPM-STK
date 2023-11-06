import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
function Nav(props) {
  return (
    <div>
      <div className="topnav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/create">Create</NavLink>
        <NavLink to="/putMoney">Put Money</NavLink>
        <NavLink to="/withdrawn">Withdrawn</NavLink>
        <NavLink to="/listPassbook">List Passbook</NavLink>
      </div>
    </div>
  );
}

export default Nav;
