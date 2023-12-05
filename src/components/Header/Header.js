import React from "react";
import "../../App.css";
import "./header.css";
import { Link } from "react-router-dom";

import Cookies from "js-cookie";
import SubHead from "./SubHead";
import logo from "../../assets/1.png";
const Header = () => {
  const userCookie = Cookies.get("user");

  return (
    <div>
      {userCookie ? (
        <SubHead />
      ) : (
        <div className="sc-4abd7efd-0 fwqFtH">
          <div className="sc-4abd7efd-1 cEOECa">
            <div className="sc-4abd7efd-2 fOlkLG">
              <Link to="/" className="sc-4abd7efd-3 ubXNY">
                <img className="logo" alt="Logo" src={logo} />
              </Link>
            </div>
            <div className="sc-4abd7efd-2 fOlkLG hide-mobile">
              <div className="sc-4abd7efd-4 bICoNm"></div>
            </div>

            <Link
              to="/login"
              className="rounded-md mr-10 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
