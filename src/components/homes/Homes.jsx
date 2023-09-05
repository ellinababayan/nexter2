import React from "react";
import "./Homes.css"

const Homes = () => {
  return (
    <section className="homes">
      <div className="home">
        <img src="img/house1.jpg" alt="House 1" className="home__img" />
        <svg className="home__like">
          {/* <use xlink:href="img/sprite.svg#icon-heart-full"></use> */}
        </svg>
        <h5 className="home__name">Beautiful Family House</h5>
        <div className="home__location">
          <svg>
            {/* <use xlink:href="img/sprite.svg#icon-map-pin"></use> */}
          </svg>
          <p>USA</p>
        </div>
        <div className="home__rooms">
          <svg>
            {/* <use xlink:href="img/sprite.svg#icon-profile-male"></use> */}
          </svg>
          <p>5 rooms</p>
        </div>
        <div className="home__area">
          <svg>{/* <use xlink:href="img/sprite.svg#icon-expand"></use> */}</svg>
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>{/* <use xlink:href="img/sprite.svg#icon-key"></use> */}</svg>
          <p>$1,200,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src="img/house2.jpg" alt="House 2" className="home__img" />
        <svg className="home__like">
          {/* <use xlink:href="img/sprite.svg#icon-heart-full"></use> */}
        </svg>
        <h5 className="home__name">Modern Glass Villa</h5>
        <div className="home__location">
          <svg>
            {/* <use xlink:href="img/sprite.svg#icon-map-pin"></use> */}
          </svg>
          <p>Canada</p>
        </div>
        <div className="home__rooms">
          <svg>
            {/* <use xlink:href="img/sprite.svg#icon-profile-male"></use> */}
          </svg>
          <p>6 rooms</p>
        </div>
        <div className="home__area">
          <svg>{/* <use xlink:href="img/sprite.svg#icon-expand"></use> */}</svg>
          <p>
            450 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>{/* <use xlink:href="img/sprite.svg#icon-key"></use> */}</svg>
          <p>$2,750,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src="img/house3.jpg" alt="House 3" className="home__img" />
        <svg className="home__like">
          {/* <use xlink:href="img/sprite.svg#icon-heart-full"></use> */}
        </svg>
        <h5 className="home__name">Cozy Country House</h5>
        <div className="home__location">
          <svg>
            {/* <use xlink:href="img/sprite.svg#icon-map-pin"></use> */}
          </svg>
          <p>UK</p>
        </div>
        <div className="home__rooms">
          <svg>
            {/* <use xlink:href="img/sprite.svg#icon-profile-male"></use> */}
          </svg>
          <p>4 rooms</p>
        </div>
        <div className="home__area">
          <svg>{/* <use xlink:href="img/sprite.svg#icon-expand"></use> */}</svg>
          <p>
            250 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>{/* <use xlink:href="img/sprite.svg#icon-key"></use> */}</svg>
          <p>$850,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src="img/house4.jpg" alt="House 4" className="home__img" />
        <svg className="home__like">
          {/* <use xlink:href="img/sprite.svg#icon-heart-full"></use> */}
        </svg>
        <h5 className="home__name">Large Rustical Villa</h5>
        <div className="home__location">
          <svg>
            {/* <use xlink:href="img/sprite.svg#icon-map-pin"></use> */}
          </svg>
          <p>Portugal</p>
        </div>
        <div className="home__rooms">
          <svg>
            {/* <use xlink:href="img/sprite.svg#icon-profile-male"></use> */}
          </svg>
          <p>6 rooms</p>
        </div>
        <div className="home__area">
          <svg>{/* <use xlink:href="img/sprite.svg#icon-expand"></use> */}</svg>
          <p>
            480 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>{/* <use xlink:href="img/sprite.svg#icon-key"></use> */}</svg>
          <p>$1,950,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src="img/house5.jpg" alt="House 5" className="home__img" />
        <svg className="home__like">
          {/* <use xlink:href="img/sprite.svg#icon-heart-full"></use> */}
        </svg>
        <h5 className="home__name">Majestic Palace House</h5>
        <div className="home__location">
          <svg>
            {/* <use xlink:href="img/sprite.svg#icon-map-pin"></use> */}
          </svg>
          <p>Germany</p>
        </div>
        <div className="home__rooms">
          <svg>
            {/* <use xlink:href="img/sprite.svg#icon-profile-male"></use> */}
          </svg>
          <p>18 rooms</p>
        </div>
        <div className="home__area">
          <svg>{/* <use xlink:href="img/sprite.svg#icon-expand"></use> */}</svg>
          <p>
            4230 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>{/* <use xlink:href="img/sprite.svg#icon-key"></use> */}</svg>
          <p>$9,500,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src="img/house6.jpg" alt="House 6" className="home__img" />
        <svg className="home__like">
          {/* <use xlink:href="img/sprite.svg#icon-heart-full"></use> */}
        </svg>
        <h5 className="home__name">Modern Family Apartment</h5>
        <div className="home__location">
          <svg>
            {/* <use xlink:href="img/sprite.svg#icon-map-pin"></use> */}
          </svg>
          <p>Italy</p>
        </div>
        <div className="home__rooms">
          <svg>
            {/* <use xlink:href="img/sprite.svg#icon-profile-male"></use> */}
          </svg>
          <p>3 rooms</p>
        </div>
        <div className="home__area">
          <svg>{/* <use xlink:href="img/sprite.svg#icon-expand"></use> */}</svg>
          <p>
            180 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>{/* <use xlink:href="img/sprite.svg#icon-key"></use> */}</svg>
          <p>$600,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>
    </section>
  );
};

export default Homes;
