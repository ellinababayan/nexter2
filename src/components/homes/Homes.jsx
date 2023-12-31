import React from "react";
import "./Homes.css";
import {
  CubeIcon,
  ExpandIcon,
  HeartIcon,
  MapIcon,
  MoneyIcon,
} from "../svg/Svg";
import Gallery1 from "../house_gallery/gallery1/Gallery1";
import Gallery2 from "../house_gallery/gallery2/Gallery2";
import Gallery3 from "../house_gallery/gallery3/Gallery3";
import Gallery4 from "../house_gallery/gallery4/Gallery4";
import Gallery5 from "../house_gallery/gallery5/Gallery5";
import Gallery6 from "../house_gallery/gallery6/Gallery6";

const Homes = () => {
  return (
    <section className="homes" id="houses">
      <div className="home">
        {/* <img src="img/house1.jpg" alt="House 1" className="home__img" /> */}
        <div className="home__img">
          <Gallery1 />
        </div>
        <h5 className="home__name">Beautiful Family House</h5>
        <div className="home__location">
          <MapIcon />
          <p>USA</p>
        </div>
        <div className="home__rooms">
          <CubeIcon />
          <p>5 rooms</p>
        </div>
        <div className="home__area">
          <ExpandIcon />
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <MoneyIcon />
          <p>$1,200,000</p>
        </div>
        <a className="btn home__btn" href="#popup">
          Contact realtor
        </a>
      </div>

      <div className="home">
        {/* <img src="img/house2.jpg" alt="House 2" className="home__img" /> */}
        <div className="home__img">
          <Gallery2 />
        </div>
        {/* <HeartIcon /> */}
        <h5 className="home__name">Modern Glass Villa</h5>
        <div className="home__location">
          <MapIcon />
          <p>Canada</p>
        </div>
        <div className="home__rooms">
          <CubeIcon />
          <p>6 rooms</p>
        </div>
        <div className="home__area">
          <ExpandIcon />
          <p>
            450 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <MoneyIcon />
          <p>$2,750,000</p>
        </div>
        <a className="btn home__btn" href="#popup">
          Contact realtor
        </a>
      </div>

      <div className="home">
        {/* <img src="img/house3.jpg" alt="House 3" className="home__img" /> */}
        <div className="home__img">
          <Gallery3 />
        </div>
        {/* <HeartIcon /> */}
        <h5 className="home__name">Cozy Country House</h5>
        <div className="home__location">
          <MapIcon />
          <p>UK</p>
        </div>
        <div className="home__rooms">
          <CubeIcon />
          <p>4 rooms</p>
        </div>
        <div className="home__area">
          <ExpandIcon />
          <p>
            250 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <MoneyIcon />
          <p>$850,000</p>
        </div>
        <a className="btn home__btn" href="#popup">
          Contact realtor
        </a>
      </div>

      <div className="home">
        {/* <img src="img/house4.jpg" alt="House 4" className="home__img" /> */}
        <div className="home__img">
          <Gallery4 />
        </div>
        {/* <HeartIcon /> */}
        <h5 className="home__name">Large Rustical Villa</h5>
        <div className="home__location">
          <MapIcon />
          <p>Portugal</p>
        </div>
        <div className="home__rooms">
          <CubeIcon />
          <p>6 rooms</p>
        </div>
        <div className="home__area">
          <ExpandIcon />
          <p>
            480 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <MoneyIcon />
          <p>$1,950,000</p>
        </div>
        <a className="btn home__btn" href="#popup">
          Contact realtor
        </a>
      </div>

      <div className="home">
        {/* <img src="img/house5.jpg" alt="House 5" className="home__img" /> */}
        <div className="home__img">
          <Gallery5 />
        </div>
        {/* <HeartIcon /> */}
        <h5 className="home__name">Majestic Palace House</h5>
        <div className="home__location">
          <MapIcon />
          <p>Germany</p>
        </div>
        <div className="home__rooms">
          <CubeIcon />
          <p>18 rooms</p>
        </div>
        <div className="home__area">
          <ExpandIcon />
          <p>
            4230 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <MoneyIcon />
          <p>$9,500,000</p>
        </div>
        <a className="btn home__btn" href="#popup">
          Contact realtor
        </a>
      </div>

      <div className="home">
        {/* <img src="img/house6.jpg" alt="House 6" className="home__img" /> */}
        <div className="home__img">
          <Gallery6 />
        </div>
        {/* <HeartIcon /> */}
        <h5 className="home__name">Modern Family Apartment</h5>
        <div className="home__location">
          <MapIcon />
          <p>Italy</p>
        </div>
        <div className="home__rooms">
          <CubeIcon />
          <p>3 rooms</p>
        </div>
        <div className="home__area">
          <ExpandIcon />
          <p>
            180 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <MoneyIcon />
          <p>$600,000</p>
        </div>
        <a className="btn home__btn" href="#popup">
          Contact realtor
        </a>
      </div>
    </section>
  );
};

export default Homes;
