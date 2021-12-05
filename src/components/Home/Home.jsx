import React, { useEffect } from "react";
import "./Home.css";
import image from "../../images/cyclelock_new.png";
import scrollreveal from "scrollreveal";

function Home() {
  useEffect(() => {
    const sr = scrollreveal({
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    sr.reveal(`.home__header, .section__title`, { delay: 600 });
    sr.reveal(`.home__title`, { origin: "right", delay: 600 });
    sr.reveal(`.home__subtitle`, { origin: "left", delay: 600 });
    sr.reveal(`.home__footer`, { delay: 700 });
    sr.reveal(`.home__img`, { origin: "left", intervval: 100 });
  });

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
                Lockomatic is the world's leading cycle security product. With
                Lockomatic's built in GPS and Bluetooth enabled technology, you
                will never have to worry about losing your cycle anymore. Our
                proprietary technology also lets you change the pin, and alerts
                you whenever someone tries to steal your ride. <br /> See, It's
                more than just a lock.
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
