import React from "react";
import "./Home.css";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Realtors from "../components/realtors/Realtors";
import Features from "../components/features/Features";
import Story from "../components/story/StoryPictures";
import StoryContent from "../components/story/StoryContent";
import Homes from "../components/homes/Homes";
import Gallery from "../components/gallery/Gallery";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <StoryContent />
      <Homes />
      <Gallery />

      <footer className="footer">
        <ul className="nav">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Find your dream home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Request proposal
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Download home planner
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Contact us
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Submit your property
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Come work with us!
            </a>
          </li>
        </ul>
        <p className="copyright">&copy;Copyright 2022 by Ellina Babaian</p>
      </footer>
    </div>
    // </div>
  );
};

export default Home;
