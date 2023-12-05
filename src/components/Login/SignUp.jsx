import React, { useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { baseurl } from "../../utils/BaseUrl";

const SignUp = () => {
  const userCookie = Cookies.get("user");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");

  const handleAuth = async () => {
    try {
      const response = await axios.post(`${baseurl}/auth/signupWithEmail`, {
        Email: email,
        Password: password,
        Name,
      });
      Cookies.set("user", response.data.token);

      window.location.reload();
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
  return (
    <div>
      <Header />
      <ToastContainer />
      <div>
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
                    <label for="email">Sign up with email</label>
                    <div className="sc-1c859520-0 jHAXMR">
                      <input
                        className="sc-1c859520-1 cvZGAj input"
                        id="Name"
                        type="name"
                        name="Name"
                        placeholder="Enter Your Name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        fdprocessedid="mjjker"
                      />
                    </div>
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
                        placeholder="Password"
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
                      Sign Up
                    </button>
                    <br />
                  </div>
                  <Link to="/login">Already Account? Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
