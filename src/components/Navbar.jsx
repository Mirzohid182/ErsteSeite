import React from "react";
import "./../App.css";
import n from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={n.nav}>
      <div className={n.item}>
        <a href="#a">Profile </a>
      </div>
      <div className={n.item}>
        <a href="#w">Message </a>
      </div>
      <div className={n.item}>
        <a href="#s">News </a>
      </div>
      <div  className={n.item}>
        <a href="#d">Musik </a>
      </div>
      <div className={`${n.Settings} ${n.active}`}>
        <a href="#n">Settings </a>
      </div>
    </nav>
  );
};

export default Navbar;
