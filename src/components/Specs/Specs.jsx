import React, { useEffect } from "react";
import "./Specs.css";
import lock from "../../images/cyclelock_new_side.png";
import scrollreveal from "scrollreveal";

function Specs() {
  useEffect(() => {
    const sr = scrollreveal({
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    sr.reveal(`.specs__data`, {
      delay: 500,
      origin: "left",
    });
    sr.reveal(`.specs__img`, { delay: 700, interval: 200, origin: "right" });
  });

  return (
    <div>
      <section class="specs section grid" id="specs">
        <h2 class="section__title section__title-gradient">Specs</h2>

        <div class="specs__container container grid">
          <div class="specs__content grid">
            <div class="specs__data">
              <i class="ri-bluetooth-line specs__icon"></i>
              <h3 class="specs__title">Connection</h3>
              <span class="specs__subtitle">Bluetooth v5.2</span>
            </div>

            <div class="specs__data">
              <i class="ri-battery-charge-line specs__icon"></i>
              <h3 class="specs__title">Battery</h3>
              <span class="specs__subtitle">Duration 1 week</span>
            </div>

            <div class="specs__data">
              <i class="ri-plug-line specs__icon"></i>
              <h3 class="specs__title">Security</h3>
              <span class="specs__subtitle">Alert on Phone</span>
            </div>

            <div class="specs__data">
              <i class="ri-mic-line specs__icon"></i>
              <h3 class="specs__title">Durability</h3>
              <span class="specs__subtitle">
                Made from <br /> Military Grade Material
              </span>
            </div>
          </div>

          <div>
            <img src={lock} alt="" class="specs__img" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Specs;
