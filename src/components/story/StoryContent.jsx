import React from "react";

const StoryContent = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="story__content" id="story">
      <h3 className="heading-3 mb-sm">Happy Customers</h3>
      <h2 className="heading-2 heading-2--dark mb-md">
        &rdquo;The best decision of our lives&rdquo;
      </h2>
      <p className="story__text">
        I can't thank this website enough for helping us find our dream home. It
        made the house-hunting process a breeze with its user-friendly interface
        and personalized recommendations. 'The best decision of our lives' was
        choosing this platform.
      </p>
      <a
        className="btn btn__story"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("homes");
        }}
      >
        Find your own house
      </a>
    </div>
  );
};

export default StoryContent;
