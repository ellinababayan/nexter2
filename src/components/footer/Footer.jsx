import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <ul className="nav">
        <li className="nav__item">
          <a href="#houses" className="nav__link">
            Find your dream house
          </a>
        </li>
        {/* <li className="nav__item">
          <a href="#" className="nav__link">
            Request proposal
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Download home planner
          </a>
        </li> */}
        <li className="nav__item">
          <a href="#contact" className="nav__link">
            Contact us
          </a>
        </li>
        <li className="nav__item">
          <a href="#your" className="nav__link">
            Submit your property
          </a>
        </li>
        <li className="nav__item">
          <a href="#work" className="nav__link">
            Come work with us!
          </a>
        </li>
      </ul>
      <p className="copyright">&copy;Copyright 2023 by Ellina Babaian</p>
    </footer>
  );
};

export default Footer;
