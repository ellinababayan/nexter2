import React from "react";
import "./Success.css";

const Success = () => {
  return (
    <div className="popup" id="success">
      <div className="popup__content ">
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <div className="popup__contact">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Thank you! <br></br> We will be in touch with you soon
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
