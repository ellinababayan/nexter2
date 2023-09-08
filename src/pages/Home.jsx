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
import Footer from "../components/footer/Footer";
import RealtorPopup from "./popup/realtor_popup/RealtorPopup";
import Contact from "./popup/contact_popup/Contact";
import NavBarPage from "./navbar/NavbarPage";

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
      <Footer />
      <RealtorPopup />
      <Contact />
      <NavBarPage />
    </div>
  );
};

export default Home;
