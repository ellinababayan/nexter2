import React from "react";
import "./Header.css";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Nexter_Logo.svg/1024px-Nexter_Logo.svg.png"
        alt="Nexter logo"
        className="header__logo"
      />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <a
        className="btn header__btn"
        
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("houses");
        }}
      >
        View our properties
      </a>
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img
          src="https://seeklogo.com/images/B/bbc-news-logo-8648ABD044-seeklogo.com.png"
          alt="BBC"
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2021/08/Forbes-Emblem.png"
          alt="Forbes"
        />
        <img
          src="https://ww1.freelogovectors.net/wp-content/uploads/2017/03/tc-techcrunch-logo.png"
          alt="TechCrunch"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/31/Business_Insider_logo.png"
          alt="Business Insider"
        />
      </div>
    </header>
  );
};

export default Header;
