import React from "react";
import "./Story.css"

const Story = () => {
  return (
      <div className="story__pictures">
        <img src="img/story-img--3 (2).jfif"  alt="Property" className="story__img--1" />
        <img src="https://advantage4parents.com/wp-content/uploads/2017/11/happy-family.jpg" alt="Customers photo" className="story__img--2" />
        {/* <!-- <img src="img/story-img--2.jpg" alt="" className="story__img--3"> --> */}
      </div>
  );
};

export default Story;
