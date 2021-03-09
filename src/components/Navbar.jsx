import React from "react";
import "./../App.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <a href="#w">Profile </a>
      </div>
      <div>
        <a href="#w">Message </a>
      </div>
      <div>
        <a href="#w">News </a>
      </div>
      <div>
        <a href="#w">Musik </a>
      </div>
      <div className="Settings">
        <a href="#w">Settings </a>
      </div>
    </nav>
  );
};

export default Navbar;
