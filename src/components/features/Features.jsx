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
          Explore a world of opulence and grandeur in the most sought-after
          luxury properties across the globe. From stunning penthouses in
          Manhattan to breathtaking villas on the French Riviera, these homes
          redefine luxury living.{" "}
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          {/* <use xlink:href="img/sprite.svg#icon-trophy"></use> */}
        </svg>
        <h4 className="heading-4 heading-4--dark">Only the best properties</h4>
        <p className="feature__text">
          We curate a selection of the finest luxury properties that cater to
          your refined tastes and aspirations. Each home is a masterpiece,
          designed for those who demand nothing but excellence.
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
          Our portfolio boasts homes in the most prestigious locations
          worldwide. Whether you desire the vibrant energy of city life or the
          tranquility of a secluded estate, we have the perfect property for
          you.
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          {/* <use xlink:href="img/sprite.svg#icon-global"></use> */}
        </svg>
        <h4 className="heading-4 heading-4--dark">New home in one week</h4>
        <p className="feature__text">
          Need to move into your dream home quickly? Our team specializes in
          expediting the process. Discover your ideal luxury residence and make
          it yours within a week.
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          {/* <use xlink:href="img/sprite.svg#icon-presentation"></use> */}
        </svg>
        <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
        <p className="feature__text">
          Trust your real estate journey to the best in the business. Our elite
          team of realtors understands the luxury market inside out, ensuring
          you receive unparalleled service and expertise.{" "}
        </p>
      </div>
      <div className="feature">
        <svg className="feature__icon">
          {/* <use xlink:href="img/sprite.svg#icon-lock"></use> */}
        </svg>
        <h4 className="heading-4 heading-4--dark">Secure payments on XXX</h4>
        <p className="feature__text">
          We prioritize your financial security. With our trusted payment
          platform, you can complete your luxury property transaction with
          confidence and peace of mind, knowing your investment is protected.{" "}
        </p>
      </div>
    </section>
  );
};

export default Features;
