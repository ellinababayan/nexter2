import React from "react";
import "./Home.css";

const Home = () => {
  return (
    // <div className="container">
    <div className="container">
      <div className="sidebar">
        <button className="nav-btn"></button>
      </div>

      <header className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Nexter_Logo.svg/1024px-Nexter_Logo.svg.png"
          alt="Nexter logo"
          className="header__logo"
        />
        <h3 className="heading-3">Your own home:</h3>
        <h1 className="heading-1">The ultimate personal freedom</h1>
        <button className="btn header__btn">View our properties</button>
        <div className="header__seenon-text">Seen on</div>
        <div className="header__seenon-logos">
          <img
            src="https://seeklogo.com/images/B/bbc-news-logo-8648ABD044-seeklogo.com.png"
            alt="BBC"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2021/08/Forbes-Emblem.png"
            alt="Forbes"
          />
          <img
            src="https://ww1.freelogovectors.net/wp-content/uploads/2017/03/tc-techcrunch-logo.png"
            alt="TechCrunch"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/31/Business_Insider_logo.png"
            alt="Business Insider"
          />
        </div>
      </header>

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

          <img
            src="img/realtor1.jpg"
            alt="Realtor 1"
            className="realtors__img"
          />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Kim Brown</h4>
            <p className="realtors__sold">212 houses sold</p>
          </div>

          <img
            src="img/realtor3.jpg"
            alt="Realtor 1"
            className="realtors__img"
          />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Toby Romsey</h4>
            <p className="realtors__sold">190 houses sold</p>
          </div>
        </div>
      </div>

      <section className="features">
        <div className="feature">
          <svg className="feature__icon">
            {/* <use xlink:href="img/sprite.svg#icon-global"></use> */}
          </svg>
          <h4 className="heading-4 heading-4--dark">
            World's best luxury houses
          </h4>
          <p className="feature__text">
            Lorem ipsum dolor, voluptatum ipsum dolor, sit amet consectetur.
            Ipsum dolor, voluptatum ipsum dolor, sit amet consectetur adipi.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            {/* <use xlink:href="img/sprite.svg#icon-trophy"></use> */}
          </svg>
          <h4 className="heading-4 heading-4--dark">
            Only the best properties
          </h4>
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
            Ipsum dolor, voluptatum ipsum dolor, sit amet consectetur adipi.
            Ipsum dolor, voluptatum ipsum dolor, sit amet consectetur adipi.
          </p>
        </div>
      </section>

      <div className="story__pictures">
        <img src="img/story-img--1.jpg" alt="" className="story__img--1" />
        <img src="img/story-img--3 (2).jfif" alt="" className="story__img--2" />
        {/* <!-- <img src="img/story-img--2.jpg" alt="" className="story__img--3"> --> */}
      </div>

      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          &rdquo;The best decision of our lives&rdquo;
        </h2>
        <p className="story__text">
          Ipsum dolor, voluptatum ipsum dolor, sit amet consectetur adipi. Ipsum
          dolor, voluptatum ipsum dolor, sit amet consectetur adipi.
        </p>
        <button className="btn">Find your own house</button>
      </div>

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
            <svg>
              {/* <use xlink:href="img/sprite.svg#icon-expand"></use> */}
            </svg>
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
            <svg>
              {/* <use xlink:href="img/sprite.svg#icon-expand"></use> */}
            </svg>
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
            <svg>
              {/* <use xlink:href="img/sprite.svg#icon-expand"></use> */}
            </svg>
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
            <svg>
              {/* <use xlink:href="img/sprite.svg#icon-expand"></use> */}
            </svg>
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
            <svg>
              {/* <use xlink:href="img/sprite.svg#icon-expand"></use> */}
            </svg>
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
            <svg>
              {/* <use xlink:href="img/sprite.svg#icon-expand"></use> */}
            </svg>
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

      <section className="gallery">
        <figure className="gallery__item gallery__item--1">
          <img
            src="img/inside1.jpg"
            alt="Gallery image 1"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--2">
          <img
            src="img/inside2.jpg"
            alt="Gallery image 2"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--3">
          <img
            src="img/inside3.jfif"
            alt="Gallery image 3"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--4">
          <img
            src="img/inside4.webp"
            alt="Gallery image 4"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--5">
          <img
            src="img/inside5.webp"
            alt="Gallery image 5"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--6">
          <img
            src="img/inside6.jpg"
            alt="Gallery image 6"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--7">
          <img
            src="img/inside7.webp"
            alt="Gallery image 7"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--8">
          <img
            src="img/inside8.webp"
            alt="Gallery image 8"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--9">
          <img
            src="img/inside9.webp"
            alt="Gallery image 9"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--10">
          <img
            src="img/inside10.jpg"
            alt="Gallery image 10"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--11">
          <img
            src="img/inside11.jpg"
            alt="Gallery image 11"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--12">
          <img
            src="img/inside12.png"
            alt="Gallery image 12"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--13">
          <img
            src="img/inside13.webp"
            alt="Gallery image 13"
            className="gallery__img"
          />
        </figure>
        <figure className="gallery__item gallery__item--14">
          <img
            src="img/inside14.jpg"
            alt="Gallery image 14"
            className="gallery__img"
          />
        </figure>
      </section>

      <footer className="footer">
        <ul className="nav">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Find your dream home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Request proposal
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Download home planner
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Contact us
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Submit your property
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Come work with us!
            </a>
          </li>
        </ul>
        <p className="copyright">&copy;Copyright 2022 by Ellina Babaian</p>
      </footer>
    </div>
    // </div>
  );
};

export default Home;
