import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const toggleNavbar = () => {
    props.setIsOpen(!props.isOpen);
  };
  return (
    <div className="sidebar">
      <a className="nav-btn" href="#navbar_page" onClick={toggleNavbar}>
        {props.isOpen ? console.log("opened") : console.log("close")}
      </a>
    </div>
  );
};

export default Navbar;
