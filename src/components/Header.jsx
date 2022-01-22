import React from "react";

import logo from "../images/crox/croxvest-nobg.png";
export default function Header() {
  return (
    <header className="">
      <div className="container">
        <div className="row align-items-lg-center">
          <div className="col-lg-12 col-md-12 col-12">
            <nav className="navbar navbar-expand-lg main-nav navbar-dark">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#mainNav"
                  aria-controls="mainNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fas fa-bars" />
                </button>
                <div
                  className="col-lg-3 col-md-3 col d-flex justify-content-center"
                  id="logoholder"
                >
                  {/* Site Logo */}
                  <a href="/">
                    <img src={logo} alt="" id="logo" />
                  </a>
                </div>
              <div className="collapse navbar-collapse" id="mainNav">
                {/* Site Menus */}
                <ul className="navbar-nav">
                  <li className="nav-item ">
                    <a className="nav-link" href="/" style={{ color: "#fff" }}>
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">
                      ABOUT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      LOGIN
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/signup">
                      {" "}
                      REGISTER
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="?a=affiliate">
                      AFFILIATE
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="?a=cryptocurrency">
                      {" "}
                      CRYPTOCURRENCY
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/faq">
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      CONTACT
                    </a>
                  </li>
                  <li>
                    <div id="google_translate_element" className="mt-3"></div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
