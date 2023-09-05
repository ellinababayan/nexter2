import React from "react";
import "./Home.css";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Realtors from "../components/realtors/Realtors";
import Features from "../components/features/Features";
import Story from "../components/story/StoryPictures";
import StoryContent from "../components/story/StoryContent";
import Homes from "../components/homes/Homes";

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
      <section className="gallery">
        <figure className="gallery__item gallery__item--1">
          <img
            src="img/inside1.jpg"
            alt="Gallery image 1"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--2">
          <img
            src="img/inside2.jpg"
            alt="Gallery image 2"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--3">
          <img
            src="img/inside3.jfif"
            alt="Gallery image 3"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--4">
          <img
            src="img/inside4.webp"
            alt="Gallery image 4"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--5">
          <img
            src="img/inside5.webp"
            alt="Gallery image 5"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--6">
          <img
            src="img/inside6.jpg"
            alt="Gallery image 6"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--7">
          <img
            src="img/inside7.webp"
            alt="Gallery image 7"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--8">
          <img
            src="img/inside8.webp"
            alt="Gallery image 8"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--9">
          <img
            src="img/inside9.webp"
            alt="Gallery image 9"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--10">
          <img
            src="img/inside10.jpg"
            alt="Gallery image 10"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--11">
          <img
            src="img/inside11.jpg"
            alt="Gallery image 11"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--12">
          <img
            src="img/inside12.png"
            alt="Gallery image 12"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--13">
          <img
            src="img/inside13.webp"
            alt="Gallery image 13"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--14">
          <img
            src="img/inside14.jpg"
            alt="Gallery image 14"
            className="gallery__img"
          />
        </figure>
      </section>

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
