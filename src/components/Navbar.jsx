import React from "react";
import "./../App.css";
import n from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={n.nav}>
      <div className={n.item}>
        <a href="#w">Profile </a>
      </div>
      <div className={n.item}>
        <a href="#w">Message </a>
      </div>
      <div className={n.item}>
        <a href="#w">News </a>
      </div>
      <div  className={n.item}>
        <a href="#w">Musik </a>
      </div>
      <div className={`${n.Settings} ${n.active}`}>
        <a href="#w">Settings </a>
      </div>
    </nav>
  );
};

export default Navbar;
