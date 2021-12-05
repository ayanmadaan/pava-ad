import "./Navbar.css";
import React, { useState } from "react";
import nav from "../../images/hamburger.png";
import lockomatic from "../../images/lockomatic.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  ///
  const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  const navLink = document.querySelectorAll(".nav__link");

  function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));

  return (
    <div>
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src={lockomatic} alt="" />
        </a>

        <div
          className={click ? "nav__menu show-menu" : "nav__menu"}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item" onClick={closeMobileMenu}>
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item" onClick={closeMobileMenu}>
              <a href="#investors" className="nav__link">
                Investors
              </a>
            </li>
            <li className="nav__item" onClick={closeMobileMenu}>
              <a href="#products" className="nav__link">
                Products
              </a>
            </li>
            <li className="nav__item" onClick={closeMobileMenu}>
              <a href="#footer" className="nav__link">
                About Us
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close" onClick={closeMobileMenu}>
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={handleClick}>
          <i className="ri-function-line">
            <img src={nav} className="hamburger" />
          </i>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
