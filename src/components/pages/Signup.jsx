import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loading from "../../images/Ripple-1s-200px.gif";

function Signup() {
  const history = useHistory();
  const { referralid } = useParams();

  const [isloading, setisloading] = useState(false);
  const [plans, setplans] = useState(false);

  const toggleloading = () => {
    setisloading((e) => !e);
  };

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

  const [fname, setfname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [email, setemail] = useState("");
  const [country, setcountry] = useState("");
  const [plan, setplan] = useState("");
  const [Currency, setCurrency] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    toggleloading();

    const formdata = new FormData();
    formdata.append("fullname", fname);
    formdata.append("username", username);
    formdata.append("password", password);
    formdata.append("email", email);
    formdata.append("country", country);
    formdata.append("plan", plan);
    formdata.append("currency", Currency);
    formdata.append("isadmin", "");
    formdata.append("referredby", referralid);

    axios({
      method: "POST",
      url: "http://api.croxvest.com/api/user/createaccount.php",
      data: formdata,
    })
      .then((res) => {
        if (res.data.status === "success") {
          notify(res.data.message);
          setTimeout(() => {
            history.push("/login");
          }, 1000);
        }
        console.log(e);
      })
      .catch((err) => {
        console.log(err)
        notify(err.response.data.message);
      })
      .finally(() => {
        setTimeout(() => {
          toggleloading();
        }, 1000);
      });

    return false;
  };

  const [pass_error, setpass_error] = useState("");

  const regex = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})"
  );

  const checkPass = () => {
    if ((password !== "" || cpassword !== "") && password !== cpassword) {
      setpass_error("passwords doesnt match");
    } else {
      if (
        (password !== "" || cpassword !== "") &&
        (!regex.test(cpassword) || !regex.test(password))
      ) {
        setpass_error(
          "password must contain atleast one lower case , one upper case , one special character and one number"
        );
      } else {
        setpass_error("");
      }
    }
  };

  useEffect(() => {
    axios
      .get("http://api.croxvest.com/api/admin/packages.php?all=all")
      .then((res) => {
        //console.log(res);
        let mod = Object.values(res.data.data);
        setplans(mod);
      })
      .catch((err) => {
        console.log(err);
      });
    checkPass();
  }, [password, cpassword]);

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
      <div className="container mt-5 mb-5">
        <div className="row my-3 mx-1">
          <div className="col-md-7 col-12 m-auto bg-white border pt-2">
            <h3 className="textprimary text-center mt-5">Signup</h3>
            <form
              action=""
              method="post"
              className="form-group mt-4 px-1"
              onSubmit={submitForm}
            >
              <input
                type="text"
                className="form-control form-control-lg mb-3"
                onChange={(e) => setfname(e.target.value)}
                value={fname}
                placeholder="your Full name"
                aria-label="your fullname"
                aria-describedby="basic-addon1"
                required
              />

              <input
                type="text"
                className="form-control form-control-lg mb-3"
                onChange={(e) => setusername(e.target.value)}
                value={username}
                placeholder="username"
                aria-label="your username"
                aria-describedby="basic-addon2"
                required
              />

              <input
                type="password"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                className="form-control  form-control-lg mb-3"
                placeholder="Password"
                aria-label="your password"
                aria-describedby="basic-addon1"
                required
              />

              {pass_error ? (
                <div className="alert alert-warning" id="pass_error">
                  {pass_error}
                </div>
              ) : (
                ""
              )}

              <input
                type="password"
                onChange={(e) => setcpassword(e.target.value)}
                value={cpassword}
                className="form-control form-control-lg mb-3"
                placeholder="Confirm password"
                aria-label="your password"
                aria-describedby="basic-addon2"
                required
              />

              <input
                type="email"
                className="form-control form-control-lg mb-3"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                placeholder="your email"
                aria-label="your email"
                aria-describedby="basic-addon1"
                required
              />

              <input
                type="text"
                onChange={(e) => setcountry(e.target.value)}
                value={country}
                className="form-control form-control-lg mb-3"
                placeholder="Enter Country"
                aria-label="enter country"
                aria-describedby="basic-addon1"
                required
              />

              <select
                className="form-control form-control-lg mb-3"
                onChange={(e) => setplan(e.target.value)}
                value={plan}
                required
              >
                <option>Select Investment Plan</option>
                {plans ? (
                  plans.map((item, i) => (
                    <option value={item.plan} key={i}>
                      {item.plan}
                    </option>
                  ))
                ) : (
                  <>
                    <option value="basic plan">Basic plan</option>
                    <option value="silver plan">Silver plan</option>
                    <option value="deposit plan"> Deposit plan</option>
                    <option value="promo plan">Promo plan</option>
                  </>
                )}
              </select>

              <select
                className="form-control form-control-lg mb-3"
                onChange={(e) => setCurrency(e.target.value)}
                value={Currency}
                required
              >
                <option>Select Your Currency</option>
                <option value="usd">&#36; Usd</option>
                <option value="euro ">&euro; Eur</option>
                <option value="pound">&#163; Gbp</option>
                <option value="bitcoin ">&#8383; Bitcoin</option>
              </select>
              {isloading ? (
                <button className="btn btn-lg col primary text-white float-right mx-2 my-4">
                  <img
                    src={loading}
                    style={{ width: "30px", height: "30px" }}
                    alt=""
                  />{" "}
                  Register
                </button>
              ) : (
                <button
                  className="btn btn-lg col primary text-white float-right mx-2 my-4"
                  type="submit"
                >
                  Register
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
