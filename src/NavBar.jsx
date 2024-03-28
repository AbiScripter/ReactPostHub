import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <h2>ReactPostHub</h2>
      <div>
        <NavLink to="/">
          <span>Posts</span>
        </NavLink>
        <NavLink to="/users">
          <span>Users</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
