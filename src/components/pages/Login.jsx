import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loading from "../../images/Ripple-1s-200px.gif";

function Login() {
  let history = useHistory();

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

  const [isloading, setisloading] = useState(false);

  const toggleloading = () => {
    setisloading((e) => !e);
  };

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);

    toggleloading();

    axios({
      method: "POST",
      url: "http://api.croxvest.com/api/auth/login.php",
      data: formdata,
    })
      .then((res) => {
        if (res.data.data.user.isadmin) {
          notify(res.data.message);
          sessionStorage.setItem("admindata", res.data.data.user);
          sessionStorage.setItem("admin", res.data.data.user.userid);
          sessionStorage.setItem("username", res.data.data.user.username);
          sessionStorage.setItem("email", res.data.data.user.email);
          sessionStorage.setItem("hashadmin", res.data.data.hash);
          setTimeout(() => {
            history.push("/admin/");
          }, 600);
        } else {
          notify(res.data.message);
          sessionStorage.setItem("userdata", res.data.data.user);
          sessionStorage.setItem("user", res.data.data.user.userid);
          sessionStorage.setItem("username", res.data.data.user.username);
          sessionStorage.setItem("hashuser", res.data.data.hash);
          setTimeout(() => {
            history.push("/dashboard/");
          }, 600);
        }
      })
      .catch((err) => {
        notify(err.response.data.message);
      })
      .finally((e) => {
        setTimeout(() => {
          toggleloading();
        }, 1000);
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
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5 col-11 m-auto bg-white border pt-5">
            <h3 className="textprimary text-center mt-5">Login</h3>
            <form
              action=""
              method="post"
              className="form-group mt-4 px-3"
              onSubmit={submitForm}
            >
              <input
                type="text"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                className="form-control form-control-lg mb-3"
                placeholder="your email"
                aria-label="your email"
                aria-describedby="basic-addon1"
                required
              />

              <input
                type="password"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                className="form-control form-control-lg mb-3"
                placeholder="password"
                aria-label="your password"
                aria-describedby="basic-addon2"
                required
              />
              {isloading ? (
                <button className="btn primary text-white col  m-2">
                  <img
                    src={loading}
                    style={{ width: "30px", height: "30px" }}
                    alt=""
                  />{" "}
                  Login
                </button>
              ) : (
                <button className="btn btn-lg primary text-white col m-2">
                  Login
                </button>
              )}
            </form>
            <div className=" mb-5  mt-2 text-center">
              <a href="./signup" className=" text-muted">
                signup
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
