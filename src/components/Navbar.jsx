import React from "react";
import { NavLink } from "react-router-dom";
import n from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={n.nav}>
      <div className={n.item}>
        <NavLink to="/Content" activeClassName={n.activeNavlink}>Profile </NavLink>
      </div>
      <div className={n.item}>
        <NavLink to="/Messages" activeClassName={n.activeNavlink}>Message </NavLink>
      </div>
      <div className={n.item}>
    <NavLink to="/News" activeClassName={n.activeNavlink }>News </NavLink>
      </div>
      <div className={n.item}>
        <NavLink to="/Musik" activeClassName={n.activeNavlink}>Musik </NavLink>
      </div>
      <div className={n.item}>
        <NavLink to="/Settings" activeClassName={n.activeNavlink}>Settings </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
