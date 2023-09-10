import React from "react";
import "./NavbarPage.css";

const NavBarPage = (props) => {
  const isOpen = props.isOpen;

  const handleClose = () => {
    props.setIsOpen(false)
  }

  return isOpen ? (
    <div className="navbar_page" id="navbar_page">
      <div className="navbar_page__content">
        <div className="navbar_parent">
          <a href="#features" className="navbar_child" onClick={handleClose}>
            Features
          </a>
          <a href="#story" className="navbar_child" onClick={handleClose}>
            Stories
          </a>
          <a href="#houses" className="navbar_child" onClick={handleClose}>
            Houses
          </a>
          <a href="#gallery" className="navbar_child" onClick={handleClose}>
            Gallery
          </a>
          <a href="#contact" className="navbar_child" onClick={handleClose}>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

export default NavBarPage;
