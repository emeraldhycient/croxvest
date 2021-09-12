import React from "react";
import { Link } from "react-router-dom";

import cover from "../images/Bisquecrypto-logo (1)/vector/default-monochrome-white.svg";

export default function Header() {
  return (
    <header className="">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light shadow2">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars text-white fa-2x"></i>
        </button>
        <a className="navbar-brand offset-md-1 offset-lg-1" href="/">
          <img src={cover} alt="Bisquecrypto logo" width="200px" />
        </a>

        <div
          className="collapse navbar-collapse offset-md-4 offset-lg-6 bg-dark"
          id="navbarTogglerDemo03"
        >
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/faq">
                Faq
              </a>
            </li>
          </ul>
          <button className="btn primary">
            <Link to="/login" className="text-light">
              Login
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
