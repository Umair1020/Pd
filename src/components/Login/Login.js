import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseurl } from "../../utils/BaseUrl";
import logo from "../../assets/1.png";
const Login = () => {
  const userCookie = Cookies.get("user");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let res;
  const handleAuth = async () => {
    try {
      const response = await axios.post(`${baseurl}/auth/login`, {
        Email: email,
        Password: password,
      });
      console.log(response);
      res = response;
      window.location.reload();
      Cookies.set("user", response.data.token);
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : "An unexpected error occurred";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  // const handleGoogleSignIn = async () => {
  //   window.open(`${baseurl}/auth/google`, "_self");
  // };
  function handleGoogleSignIn() {
    const googleAuthUrl =
      "https://accounts.google.com/o/oauth2/auth" +
      "?client_id=522145634044-s8od91l3uifec7tb2jct6gmc9v2g11nd.apps.googleusercontent.com" +
      `&redirect_uri=${baseurl}/auth/google/callback` +
      "&response_type=code" +
      "&scope=openid profile email";

    // Open a new window with the Google OAuth URL
    window.open(googleAuthUrl, "_self");
  }
  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="sc-449b86b2-0 iPUoah">
        <div className="sc-449b86b2-1 fiCYsv">
          <div className="sc-449b86b2-3 uNUOB">
            <div className="sc-449b86b2-4 dDhTLS">
              <div>
                <input
                  name="csrfToken"
                  type="hidden"
                  value="5253040f42c530fea35bceb05809dbe4f7d185e435b0ef3de80a8c13865216f5"
                />
                <div className="sc-449b86b2-5 DsIDM">
                  <label for="email">Login with email</label>
                  <div className="sc-1c859520-0 jHAXMR">
                    <input
                      className="sc-1c859520-1 cvZGAj input"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      fdprocessedid="mjjker"
                    />
                  </div>
                  <div className="sc-1c859520-0 jHAXMR">
                    <input
                      className="sc-1c859520-1 cvZGAj input"
                      id="email"
                      name="Password"
                      placeholder="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      fdprocessedid="mjjker"
                    />
                  </div>
                </div>
                <div className="sc-449b86b2-7 hgRQkd">
                  <button
                    type="submit"
                    className="text"
                    fdprocessedid="oe84x"
                    onClick={handleAuth}
                  >
                    Sign In
                  </button>
                  <br />
                </div>
              </div>
            </div>
            <p className="sc-449b86b2-6 kWkvpp">or</p>
            <div className="sc-449b86b2-8 cHEZDN">
              <div className="sc-449b86b2-7 hgRQkd">
                <button
                  className="sc-449b86b2-9 gSHHke"
                  fdprocessedid="0ehwr2"
                  onClick={handleGoogleSignIn}
                >
                  <img src="/google-logo.svg" alt="Google logo" />
                  <span>Sign in with Google</span>
                </button>
              </div>
            </div>
            <p>
              <Link to="/signup">Don't have Account? SignUp</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
