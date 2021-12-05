import React from "react";
import scrollup from "../../images/scrollup.png";
import "./Scroller.css";

function Scroller() {
  return (
    <div>
      <a href="#" id="scroll-up">
        <img src={scrollup} className="scrollup" />
      </a>
    </div>
  );
}

export default Scroller;
