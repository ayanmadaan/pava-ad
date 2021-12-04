import React from "react";
import "./Investors.css";
import investor from "../../images/investor1.png";

function Investors() {
  return (
    <>
      <section className="investor section">
        <div className="investor__container container grid">
          <img src={investor} alt="" className="investor__img" />
          <img src={investor} alt="" className="investor__img" />
          <img src={investor} alt="" className="investor__img" />
          <img src={investor} alt="" className="investor__img" />
        </div>
      </section>
    </>
  );
}

export default Investors;
