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
              <h1 className="home__title">Automatic</h1>
              <h2 className="home__subtitle">Cycle Lock</h2>
            </div>

            <div className="home__footer">
              <h3 className="home__title-description">Overview</h3>
              <p className="home__description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
              <a href="#" className="button button--flex">
                <span className="button--flex">
                  <i className="ri-shopping-bag-line button__icon"></i> Add to
                  Bag
                </span>
                <span className="home__price">₹800</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;