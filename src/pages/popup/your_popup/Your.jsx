import React, { useState } from "react";
import "./Your.css";
import Contact from "../contact_popup/Contact";

const Your = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setIsSubmitted(true);
    window.location.href = "#success";
  };

  return (
    <div>
      {" "}
      <div className="popup" id="your">
        <div className="popup__content">
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Submit your property
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Complete a short form and we will give you call back
            </h3>
            <div className="popup__contact">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="your_popup__input"
                  placeholder="First Name"
                  required
                ></input>
                <input
                  type="text"
                  className="your_popup__input"
                  placeholder="Last Name"
                  required
                ></input>
                <input
                  type="tel"
                  className="your_popup__input"
                  placeholder="Phone Number"
                  required
                ></input>
                <input
                  type="email"
                  className="your_popup__input"
                  placeholder="Email"
                  required
                ></input>
                <div className="button__contact">
                  <input
                    type="submit"
                    className="btn contact__btn"
                    value="Send Now"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Your;
