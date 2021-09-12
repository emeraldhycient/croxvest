import React from "react";
import btc1 from "../../images/btc-logo.jpg";
import btc2 from "../../images/btc-logo2.jfif";
import btc3 from "../../images/btc-logo3.jpg";

function News() {
  return (
    <div className="container">
      <div className="col-md-7 m-auto text-center">
        <h1 className="text-center">|</h1>
        <h2>Latest Story</h2>
        <p className="text-muted w-md-75 m-auto">
          Our team regularly publishes articles about banking & financial news
          as well as updates on special offers and tips from our consultants.
        </p>
      </div>
      <div className="row mt-5">
        <div className="col-md-4 mb-3">
          <img src={btc2} width="100%" height="260px" alt="bisquecrypto news" />
          <div className="m-2">
            <h5 className="textprimary mr-1">
              Coins to buy before December 2021
            </h5>
            <p className="text-muted">
              The cryptocurrency market includes hundreds of different
              cryptocurrencies, including Bitcoin, Ethereum, Tether, and
              Dogecoin. Investing in cryptocurrencies can be daunting if you
              have never done it before since so many currencies exist.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <img src={btc1} width="100%" height="260px" alt="bisquecrypto news" />
          <div className="m-2">
            <h5 className="textprimary mr-1">
              Coins to buy before December 2021
            </h5>
            <p className="text-muted">
              The cryptocurrency market includes hundreds of different
              cryptocurrencies, including Bitcoin, Ethereum, Tether, and
              Dogecoin. Investing in cryptocurrencies can be daunting if you
              have never done it before since so many currencies exist.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <img src={btc3} width="100%" height="260px" alt="bisquecrypto news" />
          <div className="m-2">
            <h5 className="textprimary mr-1">
              Coins to buy before December 2021
            </h5>
            <p className="text-muted">
              The cryptocurrency market includes hundreds of different
              cryptocurrencies, including Bitcoin, Ethereum, Tether, and
              Dogecoin. Investing in cryptocurrencies can be daunting if you
              have never done it before since so many currencies exist.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
