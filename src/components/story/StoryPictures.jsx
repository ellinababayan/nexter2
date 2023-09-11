import React from "react";
import "./Story.css";

const Story = () => {
  return (
    <div className="story__pictures">
      {/* <img src="img/story-img--3 (2).jfif"  alt="Property" className="story__img--1" /> */}
      <img
        // src="https://www.east-texas.com/images/photos-beaumont/mcfaddin-ward-house-museum-beaumont-texas.jpg"
        src="https://cdn.houseplansservices.com/content/d9d71k8rm2cu3vab39hsq4ii6b/w991x660.jpg?v=9"
        alt="Property"
        className="story__img--1"
      />
      <img
        src="https://advantage4parents.com/wp-content/uploads/2017/11/happy-family.jpg"
        alt="Customers photo"
        className="story__img--2"
      />
    </div>
  );
};

export default Story;
