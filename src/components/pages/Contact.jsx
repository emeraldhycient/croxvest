import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Netbackground from "./Netbackground";
import Map from "./map/Map";

import Header from "../Header";
import News from "./News";
import Footer from "../Footer";
import loading from "../../images/Ripple-1s-200px.gif";

function Contact() {
  let location = useLocation();

  const [isloading, setisloading] = useState(false);

  const toggleloading = () => {
    setisloading((e) => !e);
  };

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const notify = (message) =>
    toast(`🦄 ${message}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handlesubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("message", message);

    toggleloading();

    axios({
      method: "POST",
      url: " https://api.croxvest.com/api/user/message.php",
      data: formdata,
    })
      .then((res) => {
        notify(res.data.message);
      })
      .catch((err) => {
        notify(err.response.data.message);
      })
      .finally((e) => {
        setTimeout(() => {
          toggleloading();
        }, 2000);
      });

    return false;
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
          <h1 className="text-center text-uppercase">Contact Us</h1>
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
              <form
                action=""
                className="form-group bg-light p-3"
                style={{ fontFamily: "sans-serif" }}
                onSubmit={handlesubmit}
              >
                <input
                  type="text"
                  placeholder="Name.."
                  className="form-control mb-3"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email..."
                  className="form-control mb-3"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Subject.."
                  className="form-control mb-3"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
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

export default Contact;
