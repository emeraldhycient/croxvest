import React from "react";

import cover from "../../images/crox/croxvest-nobg.png";
import { logout } from "../auth/auth";
import "./style.css"


function Body(props) {
  return (
    <>
      <header>
        <nav className="navbar bg-white shadow">
          <img
            src={cover}
            alt=""
            className="offset-md-2 offset-sm-2"
            id="logo"
          />
          <div className="text-right">
            <i
              className="fa fa-power-off fa-2x text-danger"
              onClick={logout}
            ></i>
          </div>
        </nav>
      </header>
      <div className="container pt-3">{props.children}</div>
    </>
  );
}

export default Body;
