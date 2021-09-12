import React from "react";
import cover from "../images/Bisquecrypto-logo (1)/vector/default-monochrome-white.svg";

function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  const placeName = "Route 344 Wisconsin Avenue, Washington Dc, USA";

  return (
    <footer style={{ backgroundColor: "", marginTop: "100px" }} id="blur">
      <div className="container mt-5 ">
        <div className="row mb-5">
          <div className="col-md-4 ">
            <h3 className="text-white">About Us</h3>
            <p className="pt-4 text-light">
              <small>
                Bisquecrypto has no defined limits on size or structure, but
                generally targets direct equity investments of $10 million to
                $100 million, as well as select smaller venture investments With
                the advancement in technology & current world trends, the
                conventional means of money & trading have been greatly altered.
                The same place has been taken by the stock market, foreign
                exchange & cryptocurrency market up to a great deal.
              </small>
            </p>
            <img src={cover} className="w-50 mt-5" alt="" />
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form
              action=""
              className="form-group bg-light p-3"
              style={{ fontFamily: "sans-serif" }}
            >
              <input
                type="text"
                placeholder="Name.."
                className="form-control mb-3"
                required
              />
              <input
                type="email"
                placeholder="Email..."
                className="form-control mb-3"
                required
              />
              <input
                type="text"
                placeholder="Subject.."
                className="form-control mb-3"
                required
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                className="form-control mb-3"
                required
              ></textarea>
              <button type="submit" className="btn btn-dark mt-2 btn-lg">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-5 pt-5">
          <center>
            <div className="col-md-4 d-flex align-items-center">
              <i className="fa fa-copyright text-dark mr-1"></i>
              <h6 className="text-muted">
                {" "}
                copyright {year} www.Bisquecrypto.com
              </h6>
            </div>
          </center>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
