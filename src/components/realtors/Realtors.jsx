import React from "react";
import "./Realtors.css"

const Realtors = () => {
  return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 Realtors</h3>
      <div className="realtors__list">
        <img
          src="img/realtor2.jfif"
          alt="Realtor 1"
          className="realtors__img"
        />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
          <p className="realtors__sold">245 houses sold</p>
        </div>

        <img src="img/realtor1.jpg" alt="Realtor 1" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Kim Brown</h4>
          <p className="realtors__sold">212 houses sold</p>
        </div>

        <img src="img/realtor3.jpg" alt="Realtor 1" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Toby Romsey</h4>
          <p className="realtors__sold">190 houses sold</p>
        </div>
      </div>
    </div>
  );
};

export default Realtors;
