import React from "react";
import "./Work.css";

const Work = () => {
  return (
    <div className="popup" id="work">
      <div className="popup__content">
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">Sorry!</h2>
          <div className="popup__contact">
            <h2> There are no open positions at this time</h2>
            <h3>Please check back later</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
