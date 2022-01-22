import React from "react";
import logo from "../images/crox/croxvest-nobg.png"

function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer>
    <div class="footer-widget-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12">
            <div class="site-info m-b-65">
              <div class="footer-logo m-b-35">
                <img src={logo} id="logo" alt="" />
              </div>
              <p>
                croxvest was founded by commercial traders with ten years
                experience of successful activity in the Forex market, as
                well as cryptocurrency exchanges.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <div class="widgets footer-nav m-b-65">
              <h4 class="fs-25 m-b-35"> Useful Links</h4>
              <ul>
                <li>
                  <a href="/home">HOME</a>
                </li>
                <li>
                  <a href="/about">ABOUT US</a>
                </li>
                <li>
                  <a href="/faq">FAQs</a>
                </li>
                <li>
                  <a href="/terms">TERMS</a>
                </li>
                <li>
                  <a href="/support">CONTACT US</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <div
              class="widgets recent-post m-b-65"
            >
              <h4 class="fs-25 m-b-35"> News</h4>
              <div
                style={{
                  width: "100%",
                  height: "220px",
                  backgroundColor: "#FFFFFF",
                  overflow: "hidden",
                  boxSizing: "border-box",
                  border: "1px solid #56667F",
                  borderRadius: "4px",
                  textAlign: "right",
                  lineHeight: "14px",
                  blockSize: "220px",
                  fontSize: "12px",
                  fontFeatureSettings: "normal",
                  textSizeAdjust: "100%",
                  boxShadow: "inset 0 -20px 0 0 #56667F",
                  padding: "0px",
                  margin: "0px",
                }}
              >
                <div
                  style={{
                    height: "200px",
                    padding: "0px",
                    margin: "0px",
                    width: "100%",
                  }}
                >
                  <iframe
                    src="https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=859&pref_coin_id=1505"
                    width={250}
                    height="196px"
                    scrolling="auto"
                    marginWidth={0}
                    marginHeight={0}
                    frameBorder={0}
                    title="uniq"
                    border={0}
                    style={{
                      border: 0,
                      margin: 0,
                      padding: 0,
                      lineHeight: "14px",
                    }}
                  />
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
                    fontFamily: "Verdana, Tahoma, Arial, sans-serif",
                  }}
                >
                  <a
                    href="https://coinlib.io"
                    target="_blank"
                    style={{
                      fontWeight: 500,
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontSize: "11px",
                    }}
                    rel="noreferrer"
                  >
                    Cryptocurrency Prices
                  </a>
                  &nbsp;by Croxvest.com
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <div class="widgets subscribe-widget m-b-65">
              <h4 class="fs-25 m-b-35"> Contact</h4>
              <ul class="footer-address m-t-30">
                <li>
                  <strong>Address:</strong> 85 Great Portland Street,
                  First Floor, London, England, W1W 7LT{" "}
                </li>

                <li>
                  <strong>Website:</strong> croxvest
                </li>
                <li>
                  <strong>Email:</strong> Admin@croxvest.com
                </li>
                <br />

                <li>&copy; {year} croxvest.com All Rights Reserved</li>
              </ul>
              <ul class="social-icon m-t-30">
                <li>
                  <a href="/" target="_blank">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <i class="fa fa-paper-plane"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
