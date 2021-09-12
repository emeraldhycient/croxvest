import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import axios from "axios";

import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import News from "./pages/News";

import trade from "../images/trade.png";
import safe from "../images/safe.png";
import btcrun from "../images/bitcoin.png";
import key from "../images/key.png";
import moneyexchange from "../images/money-exchange.png";
import bglaptop from "../images/bg-laptop.png";
import alex from "../images/alex-starnes.jpg";
import foto from "../images/foto-sushi.jpg";
import dominic from "../images/dominic zelle.jpg";
import rocket from "../images/rocket.png";

function Index() {
  const [plans, setplans] = useState([]);
  let modplan = Object.values(plans);

  const Packages = () => {
    return modplan.map((item, i) => (
      <div className="col-md-3 mb-3" key={i}>
        <div className="shadow pt-4 pb-5 enlarge">
          <div className="circle m-auto shadow">
            <lord-icon
              src="https://cdn.lordicon.com/qhviklyi.json"
              trigger="loop"
              colors="primary:#ffc107,secondary:#7c69ef"
              style={{ width: "250px", height: "250px" }}
            ></lord-icon>
          </div>
          <div className="mt-4">
            <h5 className="text-center">
              <b>{item.plan}</b>
            </h5>
            <h5 className="textprimary my-4 text-center">
              <b>{item.percentage}%</b>
            </h5>
            <h6 className="text-center">
              <b>RETURN ON INVESTMENT</b>
            </h6>
            <h6 className="text-muted text-center my-3">
              minimum : ${item.mindep}
            </h6>
            <h6 className="text-muted text-center my-3">
              maximum : ${item.maxdep}
            </h6>
            <h6 className="text-muted text-center my-3">
              Duration : {item.duration} Days
            </h6>
          </div>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    axios
      .get("https://api.bisquecrypto.com/api/admin/packages.php?all=all")
      .then((res) => {
        setplans(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <HeroSection>
        <div className="container mt-5 pt-5 pb-5">
          <div className="row pt-5">
            <div
              className="col-md-8 m-auto"
              style={{ fontFamily: "sans-serif" }}
            >
              <h1 className="herotext">
                <strong>Join the pool of Cryptocurrency Investors</strong>
              </h1>
              <p
                style={{
                  color: "#cacaca",
                  fontWeight: "lighter",
                  marginTop: "20px",
                }}
              >
                Hundred's of thousands of Organizations, individuals are already
                investing and storing Cryptocurrency with our secure and
                decentralized platform{" "}
              </p>
              <div id="google_translate_element" className="mt-3"></div>
              <button className="btn primary mt-3 mb-5 enlarge">
                <Link to="/signup" className="text-light">
                  Get Started
                </Link>
              </button>
              <button className="btn btn-warning text-white px-5 ml-2 mt-3 mb-5 enlarge">
                <Link to="/login" className="text-light">
                  Login
                </Link>
              </button>
            </div>
            <div className="col-md-4 m-auto enlarge">
              <lord-icon
                src="https://cdn.lordicon.com/cjieiyzp.json"
                trigger="loop"
                colors="primary:#ffc107,secondary:#7c69ef"
                style={{ width: "300px", height: "320px" }}
              ></lord-icon>
            </div>
          </div>
        </div>
      </HeroSection>
      <section className="mt-0 pt-0">
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
            ></a>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundColor: "whitesmoke",
          paddingTop: "100px",
        }}
      >
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 mt-5">
              <h6 className="text-muted text-center">
                <b>what is bitcoin</b>
              </h6>
              <h2 className="text-center mb-4">CURRENCY OF THE FUTURE</h2>
              <p className="text-muted mt-5" style={{ lineHeight: "30px" }}>
                Bitcoin is a new currency that was created in 2009 by an unknown
                person using the alias Satoshi Nakamoto. Transactions are made
                with no middle men – meaning, no banks! Bitcoin can be used to
                book hotels on Expedia, shop for furniture on Overstock and buy
                Xbox games. But much of the hype is about getting rich by
                trading it. The price of bitcoin skyrocketed into the thousands
                in 2017.
              </p>
            </div>
            <div className="col-md-5">
              <img src={bglaptop} className="bglaptop" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          paddingTop: "100px",
          fontFamily: "sans-serif",
          height: "fit-content",
          marginBottom: "60px",
        }}
        className="container"
      >
        <h3
          style={{
            fontWeight: "bolder",
            color: "#0f0f0f",
            marginTop: "30px",
            marginBottom: "70px",
          }}
          className="text-center"
        >
          <strong>Investment Packages</strong>
        </h3>
        <div className="row brkout p-0" style={{ height: "fit-content" }}>
          <Packages />
        </div>
      </section>
      <section
        style={{
          backgroundColor: "#ecebeb",
          paddingTop: "40px",
          paddingBottom: "10px",
        }}
      >
        <h3
          style={{
            fontWeight: "bolder",
            color: "#0f0f0f",
            marginTop: "80px",
            marginBottom: "70px",
          }}
          className="text-center"
        >
          <strong>Advantages Of Investing With Us</strong>
        </h3>
        <div className="container">
          <div className="row">
            <div className="col-md-3 box enlarge mb-5 mx-2">
              <div className="minibox  p-3 mt-5">
                <i className="fa fa-user-secret fa-2x text-warning"></i>
              </div>
              <h6
                style={{
                  color: "#000a0f",
                  marginTop: "22px",
                  marginBottom: "10px",
                }}
                className=""
              >
                <strong>High Transaction Security</strong>
              </h6>
              <p className="text-muted mt-3">
                We gurantee that our assets are 100% secure while transfering or
                receiving any assets from our investors.
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 box2 primary enlarge  mb-5 mx-2">
              <div className="minibox bg-light p-3 mt-5">
                <i className="fa fa-paperclip fa-2x text-warning"></i>
              </div>
              <h6
                style={{
                  color: "#000a0f",
                  marginTop: "22px",
                  marginBottom: "10px",
                }}
                className="text-default"
              >
                <strong>
                  Low Trading Commission,As Low As{" "}
                  <span className="text-warning">2%</span>
                </strong>
              </h6>
              <p className="text-light mt-3">
                We get only 2% of any amount we realised for our investor as our
                company Commission.
              </p>
            </div>
            <div className="col-md-1 "></div>
            <div className="col-md-3 box enlarge mb-5 mx-2">
              <div className="minibox p-3 mt-5">
                <i className="fa fa-exclamation-triangle fa-2x text-warning"></i>
              </div>
              <h6
                style={{
                  color: "#000a0f",
                  marginTop: "22px",
                  marginBottom: "10px",
                }}
                className=""
              >
                <strong>Risk Management By Pro's</strong>
              </h6>
              <p className="text-muted mt-3">
                We are a team of experts with several years of expriencing in
                trading and mining cryptocurrencies,so what could go wrong?
              </p>
            </div>
          </div>
          <div className="m-auto text-center">
            <button className="btn btn-warning mt-3 mb-5 enlarge">
              <Link to="/signup" className="text-light px-3">
                Get Started
              </Link>
            </button>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundColor: "whitesmoke",
          paddingTop: "100px",
          fontFamily: "sans-serif",
        }}
      >
        <h4
          style={{ fontWeight: "bolder", color: "black", marginTop: "100px" }}
          className="text-center"
        >
          <strong>Why Choose Bitcoin</strong>
        </h4>
        <h6 className="text-center text-muted">Buy ,Sell And Trade Bitcoin</h6>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4 m-auto text-center">
              <img src={safe} className="text-center mb-5" alt="" />
            </div>
            <div className="col-md-6 m-auto">
              <div className="why m-3">
                <img src={btcrun} width="80px" height="80px" alt="" srcset="" />
                <div className="w-75">
                  <h5>SAFE AND SECURE</h5>
                  <p className="text-muted">
                    Although bitcoin is a purely digital currency, it can be
                    kept secure in analog form. Paper wallets can be used to
                    store bitcoin offline, which removes the possibility of the
                    cryptocurrency being stolen by hackers or computer viruses.
                  </p>
                </div>
              </div>
              <div className="why m-3">
                <img
                  src={moneyexchange}
                  width="80px"
                  height="80px"
                  alt=""
                  srcset=""
                />
                <div className="w-75">
                  <h5>ANONYMITY</h5>
                  <p>
                    Bitcoins can be used to buy merchandise anonymously. In
                    addition, international payments are easy and cheap because
                    bitcoins are not tied to any country or subject to
                    regulation.
                  </p>
                </div>
              </div>
              <div className="why m-3">
                <img src={key} width="80px" height="80px" alt="" srcset="" />
                <div className="w-75">
                  <h5>EASE OF PURCHASE</h5>
                  <p>
                    Many marketplaces called “bitcoin exchanges” allow people to
                    buy or sell bitcoins using different currencies. Coinbase is
                    a leading exchange, along with Bitstamp and Bitfinex.
                  </p>
                </div>
              </div>
              <div className="why m-3">
                <img src={trade} width="80px" height="80px" alt="" srcset="" />
                <div className="w-75">
                  <h5>EASE OF STORAGE</h5>
                  <p className="text-lowercase">
                    BITCOINS ARE STORED IN A DIGITAL WALLET WHICH CAN EITHER BE
                    ON THE USERS COMPUTER OR IN THE CLOUD.THE WALLET IS A KIND
                    OF VISUAL BANK THAT ALLOWS USERS TO SEND AND RECEIVE
                    BITCOIN.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          paddingTop: "100px",
          fontFamily: "sans-serif",
          height: "fit-content",
        }}
        className="container-fluid"
      >
        <div className="row">
          <div
            className="col-md-6 container brkout p-0"
            style={{ backgroundColor: "#000", height: "fit-content" }}
          >
            <div className="primary text-white w-100 p-3 text-left">
              <i className="fa fa-question-circle fa-4x"></i>
            </div>
            <div className="text-center text-light p-5 w-75 m-auto">
              <h3>
                <strong>ANY QUERY ?</strong>
              </h3>
              <p>
                We are always ready and ever willing to answer your questions
                and queries
              </p>
            </div>
          </div>
          <div
            className="col-md-6 container primary brkout p-0"
            style={{ height: "fit-content" }}
          >
            <div className="bg-warning text-white w-100 p-3 text-right">
              <i className="fa fa-comments fa-4x"></i>
            </div>
            <div className="text-center text-light p-5 w-75 m-auto">
              <h3>
                <strong>CONTACT US</strong>
              </h3>
              <p>
                You can reach out to us through any of these mediums(
                <a href="tel:++12095000916" className="text-warning mr-1">
                  phone
                </a>
                or
                <a
                  href="mailto:Contact@Bisquecrypto.com"
                  className="text-warning ml-1"
                >
                  Email
                </a>
                )
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          paddingTop: "130px",
          fontFamily: "sans-serif",
        }}
      >
        <div className="text-center mb-5">
          <h6 className="text-muted">Meet Our consultants</h6>
          <h2 className="text-center">OUR CONSULTANTS</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={alex} className="h-75 w-100" alt="Chief consultant" />
              <div className="text-center mt-3">
                <h5>Alex Starnes</h5>
                <p className="text-muted">Chief consultant</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={foto} className="h-75 w-100" alt="Ceo bisquecrypto" />
              <div className="text-center mt-3">
                <h5>Foto Mack</h5>
                <p className="text-muted">Ceo Bisquecrypto</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={dominic} className="h-75 w-100" alt="Chief analyst" />
              <div className="text-center mt-3">
                <h5>Dominic Zelle</h5>
                <p className="text-muted">Chief Analyst</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="figures">
        <div className="blur">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src={rocket} alt="" className="w-75 enlarge" srcset="" />
              </div>
              <div className="col-md-8 pt-5">
                <h1 className="text-center text-light ">
                  <b>Few Awesome Stats</b>
                </h1>
                <div className="d-flex justify-content-around align-items-center mt-5 flex-wrap">
                  <div className=" text-center">
                    <i className="fa fa-users fa-2x text-warning"></i>
                    <h1 className="textprimary">
                      <strong>5,000,000</strong>
                    </h1>
                    <h3>
                      <b>Investors</b>
                    </h3>
                  </div>
                  <div className=" text-center">
                    <i className="fa fa-money fa-2x text-warning"></i>
                    <h1 className="textprimary">
                      <strong>7,522,000</strong>
                    </h1>
                    <h3>
                      <b>
                        Processed <i className="fa fa-btc"></i>
                      </b>
                    </h3>
                  </div>
                  <div className=" text-center">
                    <i className="fa fa-user-plus fa-2x text-warning"></i>
                    <h1 className="textprimary">
                      <strong>100,000</strong>
                    </h1>
                    <h3>
                      <b>Employees</b>
                    </h3>
                  </div>
                </div>
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

export default Index;
