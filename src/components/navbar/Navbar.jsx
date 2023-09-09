import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const toggleNavbar = () => {
    props.setIsOpen(!props.isOpen);
  };
  return (
    <div className="sidebar">
      <div className="nav-btn-container">
        {/* <a className="nav-btn" href="#navbar_page" onClick={toggleNavbar}> */}
        <a className="nav_btn" href="#navbar_page" onClick={toggleNavbar}>
          <p className="navbar-text">navbarcon</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="white" />
            </g>
          </svg>
          {props.isOpen ? console.log("opened") : console.log("close")}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
