import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <svg className="feature__icon">
          {/* <use xlink:href="img/sprite.svg#icon-global"></use> */}
        </svg>
        <h4 className="heading-4 heading-4--dark">
          World's best luxury houses
        </h4>
        <p className="feature__text">
          Lorem ipsum dolor, voluptatum ipsum dolor, sit amet consectetur. Ipsum
          dolor, voluptatum ipsum dolor, sit amet consectetur adipi.
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          {/* <use xlink:href="img/sprite.svg#icon-trophy"></use> */}
        </svg>
        <h4 className="heading-4 heading-4--dark">Only the best properties</h4>
        <p className="feature__text">
          Pariatur ipsum dolor, voluptatum ipsum dolor, sit amet consectetur.
          Ipsum dolor, voluptatum ipsum dolor, sit amet consectetur adipi.
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          {/* <use xlink:href="img/sprite.svg#icon-map-pin"></use> */}
        </svg>
        <h4 className="heading-4 heading-4--dark">
          All homes in top locations
        </h4>
        <p className="feature__text">
          Tenetur ipsum dolor, voluptatum ipsum dolor, sit amet consectetur.
          Ipsum dolor, voluptatum ipsum dolor, sit amet consectetur adipi.
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          {/* <use xlink:href="img/sprite.svg#icon-global"></use> */}
        </svg>
        <h4 className="heading-4 heading-4--dark">New home in one week</h4>
        <p className="feature__text">
          Quidem ipsum dolor, voluptatum ipsum dolor, sit amet consec. Ipsum
          dolor, voluptatum ipsum dolor, sit amet consectetur adipi.
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          {/* <use xlink:href="img/sprite.svg#icon-presentation"></use> */}
        </svg>
        <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
        <p className="feature__text">
          Dolor ipsum dolor, voluptatum ipsum dolor, sit amet consect. Ipsum
          dolor, voluptatum ipsum dolor, sit amet consectetur adipi.
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          {/* <use xlink:href="img/sprite.svg#icon-lock"></use> */}
        </svg>
        <h4 className="heading-4 heading-4--dark">Secure payments on XXX</h4>
        <p className="feature__text">
          Ipsum dolor, voluptatum ipsum dolor, sit amet consectetur adipi. Ipsum
          dolor, voluptatum ipsum dolor, sit amet consectetur adipi.
        </p>
      </div>
    </section>
  );
};

export default Features;
