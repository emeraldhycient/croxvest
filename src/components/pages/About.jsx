import React from "react";
import { Link, useLocation } from "react-router-dom";

import Header from "../Header";
import Netbackground from "./Netbackground";
import Map from "./map/Map";
import News from "./News";
import Footer from "../Footer";

function About() {
  let location = useLocation();

  return (
    <>
      <Netbackground>
        <Header />
        <h1
          className="text-white mb-3 mx-5"
          style={{ fontWeight: "bolder", textTransform: "uppercase" }}
        >
          {location.pathname}{" "}
        </h1>
        <p className="mx-5 text-muted">
          <Link to="/" className="text-muted text-decoration-none">
            Home
          </Link>{" "}
          <i className="fa fa-forward text-info mx-3"></i>
          {location.pathname}
        </p>
      </Netbackground>
      <section
        className=""
        style={{ marginTop: "100px", marginBottom: "30px", color: "#23153c" }}
      >
        <center>
          <h1 className="text-center text-uppercase">About Us</h1>
          <div className="m-4 shortbar"></div>
        </center>
        <br />
        <br />
        <div className="container mt-5">
          <div className="row" style={{ fontFamily: "sans-serif" }}>
            <div className="col-md-5 mb-5">
              <Map />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6 col-lg-6 col-sm-8">
              <div className="my-5">
                <p className="text-muted">
                  croxvest has no defined limits on size or structure, but
                  generally targets direct equity investments of $10 million to
                  $100 million, as well as select smaller venture investments
                  With the advancement in technology & current world trends, the
                  conventional means of money & trading have been greatly
                  altered. The same place has been taken by the stock market,
                  foreign exchange & cryptocurrency market up to a great deal.
                  However, an overwhelming majority of the people tend to get
                  confused when they opt to go beyond mainstream mediums of
                  trading & investing. This is where our platform (croxvest)
                  comes to help and enable you to be capable of using modern
                  tools & techniques for enhancing your trading profits. Not
                  only for newbies, but we also aim to assist the intermediates
                  & even expert traders by providing them with all the latest
                  gadgets which can flourish their trading & investing
                  investments thoroughly.
                </p>
              </div>
              <div className="bg-dark p-2">
                <h6 className="text-light mb-2">
                  <i className="fa fa-phone bg-light text-success rounded p-2 mr-2"></i>
                  +1(209) 500-0916 ,+62-087886768004
                </h6>
                <h6>
                  <i className="fa fa-envelope text-danger bg-light rounded p-2 mr-2"></i>
                  <a
                    href="mailto:Contact@croxvest.com"
                    className="text-light"
                  >
                    {" "}
                    Contact@croxvest.com
                  </a>
                </h6>
                <h6>
                  <i className="fa fa-envelope text-danger bg-light rounded p-2 mr-2"></i>
                  <a
                    href="mailto:support@croxvest.com"
                    className="text-light"
                  >
                    {" "}
                    support@croxvest.com
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ marginTop: "100px" }}>
        <News />
      </section>
      <Footer />
    </>
  );
}

export default About;
