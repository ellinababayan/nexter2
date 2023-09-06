import React from "react";
import "./RealtorPopup.css";

const RealtorPopup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        {/* <div className="popup__left">
        <img src="img/review1.jpg" alt="Tour photo" className="popup__img" />
        <img src="img/review2.jpg" alt="Tour photo" className="popup__img" />
      </div> */}
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Make step towards your dream house
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Read the terms before booking
          </h3>
          <p className="popup__text">
            When utilizing the "Contact Realtor" button, you consent to sharing
            your contact details with the chosen realtor for communication
            purposes. We handle your data as per our privacy policy.
          </p>
          <div className="button__contact">
            <button className="btn home__btn contact__btn">
              <span className="btn__visible">Contact now</span>
              <span className="btn__invisible">+123456789</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtorPopup;
