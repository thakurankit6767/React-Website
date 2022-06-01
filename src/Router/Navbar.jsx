import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <NavLink activeClassName="active-class" to="/">
          About
        </NavLink>
        <NavLink activeClassName="active-class" to="/contact">
          Contact
        </NavLink>

        <NavLink activeClassName="active-class" to="/user">
          User
        </NavLink>
        <NavLink activeClassName="active-class" to="/searchfilter">
          Search
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
