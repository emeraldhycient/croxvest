import React, { useEffect } from "react";

import "./assets/css/animate.css";
import "./assets/css/all.css";
import "./assets/css/slick.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/helper.css";
import "./assets/css/gullfoss.css";
import "./assets/css/responsive.css";
import "./extra.css";
import feature1 from "./assets/img/icon/feature01.png";
import feature2 from "./assets/img/icon/feature02.png";
import feature3 from "./assets/img/icon/feature03.png";
import feature4 from "./assets/img/icon/feature04.png";
import corefeat from "./assets/img/icon/check-mark-2.png";
import btcvideo from "./bitcoin.mp4";
import brand1 from "./assets/img/brand/01.png";
import brand2 from "./assets/img/brand/02.png";
import brand3 from "./assets/img/brand/03.png";
import brand4 from "./assets/img/brand/04.png";
import brand5 from "./assets/img/brand/payment-3.png";
import brand6 from "./assets/img/brand/payment-4.png";
import brand7 from "./assets/img/brand/payment-5.png";
import brand8 from "./assets/img/brand/payment-1.png";
import brand9 from "./assets/img/brand/payment-8.png";
import brand10 from "./assets/img/brand/05.png";
import Header from "../Header";
import Footer from "../Footer";

function Index2() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 2000);
  }, []);

  return (
    <div>
      <body>
        <div class="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="mainmenu-area">
          <Header />
          <div
            style={{
              height: "62px",
              backgroundColor: "#FFFFFF",
              overflow: "hidden",
              boxSizing: "border-box",
              border: "1px solid #56667F",
              borderRadius: "4px",
              textAlign: "right",
              lineHeight: "14px",
              blockSize: "62px",
              fontSize: "12px",
              fontFeatureSettings: "normal",
              textSizeAdjust: "100%",
              boxShadow: "inset 0 -20px 0 0 #56667F",
              padding: "1px",
              margin: "0px",
              width: "100%",
            }}
          >
            <div
              style={{
                height: "40px",
                padding: "0px",
                margin: "0px",
                width: "100%",
              }}
            >
              <iframe
                src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover="
                title="coinlib widget"
                width="100%"
                height="36px"
                scrolling="auto"
                marginWidth="0"
                marginHeight="0"
                frameBorder="0"
                border="0"
                style={{ border: 0, margin: 0, padding: 0 }}
              ></iframe>
            </div>
            <div
              style={{
                color: "#FFFFFF",
                lineHeight: "14px",
                fontWeight: 400,
                fontSize: "11px",
                boxSizing: "border-box",
                padding: "2px 6px",
                width: "100%",
                fontFamily: " Verdana, Tahoma, Arial, sans-serif",
              }}
            >
              <a
                href="https://coinlib.io"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontWeight: 500,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "11px",
                }}
                title="iwje"
              ></a>
            </div>
          </div>
        </div>
        <section class="hero-banner" id="heroSlideActive">
          <div class="single-banner-wrap">
            <div class="single-banner">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-7">
                    <br />
                    <br />
                    <div class="banner-text fs-16 lh-28">
                      <h1
                        class="fs-45 lh-60 m-b-45"
                        data-aos="fade-up-left"
                        data-aos-duration="1000"
                      >
                        MAKING YOUR DREAMS COME TRUE WITH CROXVEST
                      </h1>
                      <p data-aos="fade-up-left" data-aos-duration="1000">
                        croxvest is an investment company, which was founded by
                        commercial traders with ten years experience of
                        successful activity in the Forex market, as well as
                        cryptocurrency exchanges.{" "}
                      </p>
                      <div class="slider-btns m-t-65">
                        <a
                          href="/login"
                          class="boxed-btn m-r-30"
                          data-aos="fade-up-left" data-aos-duration="1000"
                        >
                          ACCOUNT
                        </a>
                        <a
                          href="/signup"
                          class="boxed-btn boxed-btn-white"
                          data-aos="fade-up-left" data-aos-duration="1000"
                        >
                          GET STARTED
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="banner-img">
                    <img src="assets/img/slider/01-1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="about-section position-relative p-b-120" id="about" data-aos="zoom-in" data-aos-duration="1000">
          <div class="container">
            <div class="feature-section">
              <h2 class="shadow-title">
                <span class="big-one">FEATURE</span>
                <span class="small-one">FEATURE</span>
              </h2>
              <div class="row">
                <div class="col-lg-3 col-md-6 col-12">
                  <div
                    class="single-feature-box p-all-30"
                    style={{
                      background: "#30d05b5c",
                      zIndex: "4",
                      borderRadius: "8px",
                    }}
                  >
                    <div class="feature-img  m-b-30">
                      <img src={feature1} alt="" />
                    </div>
                    <div class="feature-content">
                      <h4 class="fs-22 lh-31 p-b-10 m-b-25">
                        Instant Withdrawals
                      </h4>
                      <p style={{ color: "#c3bcbc" }}>
                        You can make a withdrawal whenever your balance allows
                        it.
                      </p>
                      <a href="/signup" class="readmore">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                  <div
                    class="single-feature-box p-all-30"
                    style={{
                      background: "#ef002b3b",
                      zIndex: "4",
                      borderRadius: "8px",
                    }}
                  >
                    <div class="feature-img trans-04 m-b-30">
                      <img src={feature2} alt="" />
                    </div>
                    <div class="feature-content">
                      <h4 class="fs-22 lh-31 p-b-10 m-b-25">
                        Bitcoin Security
                      </h4>
                      <p style={{ color: "#c3bcbc" }}>
                        We provide the highest level of data protection for your
                        account.
                      </p>
                      <br />
                      <a href="/signup" class="readmore">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                  <div
                    class="single-feature-box p-all-30"
                    style={{
                      background: "#f3920033",
                      zIndex: "4",
                      borderRadius: "8px",
                    }}
                  >
                    <div class="feature-img trans-04 m-b-30">
                      <img src={feature3} alt="" />
                    </div>
                    <div class="feature-content">
                      <h4 class="fs-22 lh-31 p-b-10 m-b-25">SSL encryption </h4>
                      <p style={{ color: "#c3bcbc" }}>
                        We are using SSL encryption to protect the safety of all
                        personal data! It is safe to invest.
                      </p>
                      <a href="/signup" class="readmore">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                  <div
                    class="single-feature-box p-all-30"
                    style={{
                      background: "#02949c33",
                      zIndex: "4",
                      borderRadius: "8px",
                    }}
                  >
                    <div class="feature-img trans-04 m-b-30">
                      <img src={feature4} alt="" />
                    </div>
                    <div class="feature-content">
                      <h4 class="fs-22 lh-31 p-b-10 m-b-25">24/7 Support</h4>
                      <p style={{ color: "#c3bcbc" }}>
                        Our support works 24 hours a day, 7 days a week.
                      </p>
                      <br />
                      <br />
                      <a href="/login" class="readmore">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="about-content p-t-120 bg-light rounded">
              <div class="section-title m-b-60 text-center">
                <h3 data-aos="fade-in-left" data-aos-duration="1000">About US</h3>
                <p data-aos="fade-up-left" data-aos-duration="1000">
                  We have been delivering superior service, and access to
                  education and resources to help you reach your goals with
                  confidence. More than a decade later, croxvest group continue
                  to upgrade the user experience to provide you with the best
                  tools to make trading in the capital markets accessible and
                  easier for the individual consumer.
                </p>
              </div>

              <div class="row align-items-center ">
                <div class="col-lg-6 col-md-6 col-12 ">
                  <div class="about-text">
                    <h3 class="fs-30 lh-45 m-b-30" data-aos="fade-in-left" data-aos-duration="1000">
                      Our Success <span class="theme-color">Story</span>
                    </h3>
                    <p class="m-b-20" align="justify" data-aos="fade-up-left" data-aos-duration="1000">
                      croxvest was established in mid 2020 by traders for
                      traders. We have a goal which was to create a retail
                      trading broker which allowed our clients to enjoy
                      unparalleled levels of service in terms of liquidity,
                      execution, trading conditions and customer service. We
                      understood how entering the world of forex trading was a
                      daunting process which is why we have established an
                      excellent number of automated trading system as well as
                      3rd party money management opportunities for our clients.
                      With croxvest we are confident in being able to offer one
                      of the strongest retail brokers on the market
                    </p>

                    <p class="m-b-20" align="justify" data-aos="fade-up-left" data-aos-duration="1000">
                      As a highly regulated investment firm, you can be
                      confident that croxvest meets the strict standards of
                      financial stability and correct behavior funds. Your
                      security has been and will continue to be our top
                      priority. Our aim is to promote the emergence of an
                      efficient, transparent and integrated financial trading
                      infrastructure, ensuring a higher degree of investor
                      protection.
                      <br />
                      <a
                        href="/"
                        class="boxed-btn m-r-30"
                        data-animation="fadeInUp"
                        data-delay=".8s"
                      >
                        Read More
                      </a>
                    </p>

                    <p class="m-b-20" align="justify"></p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                      width="875"
                      height="492"
                      src={btcvideo}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write;
                          encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      title="="
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="core-feature p-tb-120" data-aos="zoom-up-left" data-aos-duration="1000">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6 col-12">
                <div class="tile-gallery-wrap m-b-70 position-relative">
                  <div
                    style={{
                      height: "669px",
                      backgroundColor: "#1D2330",
                      overflow: "hidden",
                      boxSizing: "border-box",
                      border: "1px solid #282E3B",
                      borderRadius: "4px",
                      textAlign: "right",
                      lineHeight: "14px",
                      fontSize: "12px",
                      fontFeatureSettings: "normal",
                      textSizeAdjust: "100%",
                      boxShadow: "inset 0 -20px 0 0 #262B38",
                      padding: "0px",
                      margin: "0px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        height: "649px",
                        padding: "0px",
                        margin: "0px",
                        width: "100%",
                      }}
                    >
                      <iframe
                        src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=10&pref_coin_id=1505&graph=yes"
                        width="100%"
                        height="645px"
                        scrolling="auto"
                        marginwidth="0"
                        marginheight="0"
                        frameborder="0"
                        border="0"
                        style={{ border: "0", margin: "0", padding: "0" }}
                        title="specific name"
                      ></iframe>
                    </div>
                    <div
                      style={{
                        color: "#626B7F",
                        lineHeight: "14px",
                        fontWeight: "400",
                        fontize: "11px",
                        boxSizing: "border-box",
                        padding: "2px 6px",
                        width: "100%",
                        fontFamily: "Verdana, Tahoma, Arial, sans-serif",
                      }}
                    >
                      <a
                        href="https://croxvest.com"
                        target="_blank"
                        style={{
                          fontWeight: "500",
                          color: "#626B7F",
                          textDecoration: "none",
                          fontSize: "11px",
                        }}
                        rel="noreferrer"
                      >
                        Cryptocurrency Prices
                      </a>
                      &nbsp;by croxvest
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="core-content">
                  <h3 class="fs-30 lh-45 m-b-35">
                    How do we offer{" "}
                    <span class="theme-color">better profit percentages</span>{" "}
                    than other companies?{" "}
                  </h3>
                  <p class="m-b-20">
                    To start with, we are sincere with the customers who choose
                    us to invest their hard earned money. We do not commit a
                    certain profit percentage without proper research and
                    analysis.
                  </p>
                  <p>
                    When you make an investment in the financial market, you may
                    have a question at any hour of the day. To handle customer
                    queries at all times, we have a customer support team
                    working round the clock. At any hour of the day, you can get
                    in touch with one of our efficient support team members and
                    your query would be entertained on immediate basis.
                  </p>

                  <div class="core-feature-list m-t-40">
                    <ul>
                      <li>
                        <img src={corefeat} alt="" />
                        Encryption-based security.
                      </li>
                      <li>
                        <img src={corefeat} alt="" />
                        24/7 Chat and Mail Support
                      </li>
                      <li>
                        <img src={corefeat} alt="" />
                        Encryption-based security.
                      </li>
                      <li>
                        <img src={corefeat} alt="" />
                        Payment All Calendar Days
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="counterup-section position-relative bg-img-c p-tb-90" data-aos="fade-left" data-aos-duration="1000"> 
          <div class="container">
            <h3 class="fs-30 m-b-45">Our Work History</h3>
            <div class="row">
              <div class="col-lg-3 col-md-6 col-12">
                <div class="single-counter-box trans-03 text-center p-all-30">
                  <h2 class="fs-40 lh-24 theme-color m-b-30 trans-03">
                    <span class="counter">2</span>
                  </h2>
                  <p class="fs-20 fw-700">Years of experience</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-12">
                <div class="single-counter-box trans-03 text-center p-all-30">
                  <h2 class="fs-40 lh-24 theme-color m-b-30 trans-03">
                    <span class="counter">2</span>
                  </h2>
                  <p class="fs-20 fw-700">$ Billions Utilizing Firm </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-12">
                <div class="single-counter-box trans-03 text-center p-all-30">
                  <h2 class="fs-40 lh-24 theme-color m-b-30 trans-03">
                    <span class="counter">17</span>
                  </h2>
                  <p class="fs-20 fw-700">
                    Worldwide
                    <br /> Awards
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-12">
                <div class="single-counter-box trans-03 text-center p-all-30">
                  <h2 class="fs-40 lh-24 theme-color m-b-30 trans-03">
                    <span class="counter">52</span>
                  </h2>
                  <p class="fs-20 fw-700">Countries with clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="contact-section p-t-50 p-b-50" id="contact">
          <div class="container">
            <div class="brand-carousel p-b-100">
              <div
                class="pb-3"
                id="brandActive"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignContent: "center",
                  overflowX: "auto",
                  width: "100%",
                  height: "200px",
                }}
              >
                <div className="col-md-3 col-12">
                  <div class="single-brand-logo">
                    <div class="brand-logo">
                      <a href="/">
                        <img src={brand1} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-12">
                  <div class="single-brand-logo">
                    <div class="brand-logo">
                      <a href="/">
                        <img src={brand2} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-12">
                  <div class="single-brand-logo">
                    <div class="brand-logo">
                      <a href="/">
                        <img src={brand3} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-12">
                  <div class="single-brand-logo">
                    <div class="brand-logo">
                      <a href="/">
                        <img src={brand4} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-12">
                  <div className="single-brand-logo">
                    <div className="brand-logo">
                      <a href="/">
                        <img src={brand5} alt="" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-12">
                  <div className="single-brand-logo">
                    <div className="brand-logo">
                      <a href="/">
                        <img src={brand6} alt="" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-12">
                  <div className="single-brand-logo">
                    <div className="brand-logo">
                      <a href="/">
                        <img src={brand7} alt="" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-12">
                  <div className="single-brand-logo">
                    <div className="brand-logo">
                      <a href="/">
                        <img src={brand8} alt="" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-12">
                  <div className="single-brand-logo">
                    <div className="brand-logo">
                      <a href="/">
                        <img src={brand9} alt="" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-12">
                  <div className="single-brand-logo">
                    <div className="brand-logo">
                      <a href="/">
                        <img src={brand10} alt="" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <p style={{ textAlign: "center" }}>
                <b>
                  Please beware of Fraudsters claiming <br />
                  to be from croxvest.
                  <br /> All deposits and inquiries should be made through this
                  website.
                </b>
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </body>
    </div>
  );
}

export default Index2;
