import React, { useEffect } from "react";
import "./Investors.css";
import lightspeed from "../../images/investor1.png";
import scrollreveal from "scrollreveal";
import sequioa from "../../images/sequoia.svg";
import accel from "../../images/accel.svg";
import kalaari from "../../images/kalaari.png";

function Investors() {
  useEffect(() => {
    const sr = scrollreveal({
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    sr.reveal(`.investor__img`, { delay: 900, origin: "right" });
    sr.reveal(`.investor__img1`, { delay: 900, origin: "left" });
    sr.reveal(`.investor__img2`, { delay: 900, origin: "top" });
    sr.reveal(`.investor__img3`, { delay: 900, origin: "bottom" });
  });

  return (
    <>
      <section className="investor section" id="investors">
        <h2 className="section__title section__title-gradient products__line">
          Backed by
        </h2>
        <div className="investor__container container grid">
          <img src={lightspeed} alt="" className="investor__img1" />
          <img src={sequioa} alt="" className="investor__img2" />
          <img src={accel} alt="" className="investor__img3" />
          <img src={kalaari} alt="" className="investor__img" />
        </div>
      </section>
    </>
  );
}

export default Investors;
