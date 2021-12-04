import React from "react";
import "./Home.css";
import image from "../../images/cyclelock_new.png";

function Home() {
  return (
    <div className="main">
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__img">
            <img src={image} alt="" />
          </div>

          <div className="home__data">
            <div className="home__header">
              <h1 className="home__title">On ear</h1>
              <h2 className="home__subtitle">Beats 3</h2>
            </div>

            <div className="home__footer">
              <h3 className="home__title-description">Overview</h3>
              <p className="home__description">
                Enjoy award-winning Beats sound with wireless listening freedom
                and a sleek, streamlined design with comfortable padded
                earphones, delivering first-rate playback.
              </p>
              <a href="#" className="button button--flex">
                <span className="button--flex">
                  <i className="ri-shopping-bag-line button__icon"></i> Add to
                  Bag
                </span>
                <span className="home__price">$299</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
