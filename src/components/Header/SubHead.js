import React, { useRef, useState, useEffect } from "react";
import "./SubHead.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/1.png";
import { useMediaQuery } from "react-responsive";

const SubHead = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  const fileInputRef = useRef();
  const [modelVisible, setModelVisible] = useState(false);
  const [pdfDoc, setPdfDoc] = useState(null);
  const userCookie = Cookies.get("user");
  const decodedToken = jwtDecode(userCookie);
  const user = userCookie ? decodedToken : null;
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 777 })
    return isDesktop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const location = useLocation();
  const currentPath = location.pathname;

  // Conditionally render the Link based on the current path
  const shouldHideLink = currentPath === "/Document";
  const logout = () => {
    // Remove the 'user' cookie when logging out
    Cookies.remove("user");
    window.location.reload(); // Reload the page to reflect the change
  };

  // Declare an array of valid file types
  const fileType = ["application/pdf"];

  const handleFileUpload = () => {
    fileInputRef.current.click(); // Trigger the hidden file input element
  };

  const [uploadedPdf, setUploadedPdf] = useState(null);
  const openModel = () => {
    setModelVisible(true);
  };
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    setPdfDoc(selectedFile);
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setUploadedPdf(url);
    }
    if (selectedFile) {
      // Check if the selected file type is valid
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select a valid PDF file");
      }
    } else {
      console.log("Select your file");
    }
  };

  return (
    <>
      <Desktop>
        <div className="sc-67c87563-0 fQOOHf">
          <div className="sc-67c87563-1 bVtJuo">
            <div className="sc-67c87563-2 bsuEPg">
              <a className="sc-67c87563-3 dQhaIx">
                <Link to="/">
                  <img src={logo} style={{ width: "150px" }} />
                </Link>
              </a>
            </div>
            <div className="sc-67c87563-2 bsuEPg">
              <div style={{ display: "flex" }}>
                <div className="sc-67c87563-5 hRobpf">
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept=".pdf"
                    onChange={handlePdfFileChange}
                  />
                </div>
                <Link to="/price">
                  <div
                    className="div-wrapper"
                    style={{ cursor: "pointer", marginLeft: "10px" }}
                  >
                    <div className="text-wrapper-2">Upgrade</div>
                  </div>
                </Link>
                {!shouldHideLink && (
                  <Link to="/" className="font">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 12H5M12 19l-7-7 7-7"></path>
                    </svg>
                  </Link>
                )}
                {/* Your other content goes here */}
                <a>{user?.Name}</a>
                <div className="profile-pic" onClick={toggleDropdown}>
                  {user.Name.charAt(0)}
                </div>
                {isDropdownOpen && (
                  <div className="dropdown">
                    <button onClick={logout}>Logout</button>
                    <Link to="/price">
                      <button>Upgrade</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className="sc-67c87563-0 fQOOHf">
          <div className="sc-67c87563-1 bVtJuo">
            <div className="sc-67c87563-2 bsuEPg">
              <a className="sc-67c87563-3 dQhaIx">
                <Link to="/">
                  <img src={logo}  />
                </Link>
              </a>
            </div>
            <div className="sc-67c87563-2 bsuEPg">
              <div style={{ display: "flex" }}>
                <div className="sc-67c87563-5 hRobpf">
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept=".pdf"
                    onChange={handlePdfFileChange}
                  />
                </div>
                <Link to="/price">
                  <div
                    className="div-wrapper"
                    style={{ cursor: "pointer", marginLeft: "10px" }}
                  >
                    <div className="text-wrapper-2">Upgrade</div>
                  </div>
                </Link>
                {!shouldHideLink && (
                  <Link to="/" className="font">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 12H5M12 19l-7-7 7-7"></path>
                    </svg>
                  </Link>
                )}
                    <div className="profile-pic" onClick={toggleDropdown}>
                      {user.Name.charAt(0)}
                    </div>
                {/* Your other content goes here */}
                {isDropdownOpen && (
                  <div className="dropdown">
                    <a>{user?.Name}</a>
                    <button onClick={logout}>Logout</button>
                    <Link to="/price">
                      <button>Upgrade</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default SubHead;
