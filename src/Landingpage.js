import React from "react";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";
import Test from "./Pages/Pricing/Test";
import Footer from "./components/Footer/Footer";
import Index from "./components/css/Info/Info";
// import Detail from "./components/css/Detail";
import { useMediaQuery } from "react-responsive";
const Landingpage = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 777 })
    return isDesktop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  return (
    <div>
      <Mobile>
      <Header />
      <div className="sc-32a7df2f-0 gExBKk">
        <div className=" row sc-32a7df2f-1 hWYZpb mx-auto " style={{ background: "url('/mask.png')", backgroundSize: "cover", backgroundPosition: "center", width: "80%" }}>
          <div className="col-lg-4 sc-32a7df2f-2 btULvV mx-auto">
            <h1>Chat with any PDF document</h1>
            <p>
              From legal agreements to financial reports, brings your documents
              to life. You can ask questions, get summaries, find information,
              and more.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/signup"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start for free
              </Link>
              <a
                href="#demo"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>

          </div>
          <div className="col-lg-6 sc-32a7df2f-4 kflDvB">
            <div style={{ position: "relative" }}>
              <img className="" src="/mask.svg" />
            </div>
          </div>
        </div>
       
        <section className="part4">


          <div className="step-content style2">
            <div className="step-item">
              <div className="left"> <img src="/card1.png" alt="upload pdf" /> </div>
              <div className="right">
                <h1 className="text-light text-center"> Upload documents</h1>
                <p className="text-light text-center w-50 mx-auto">Easily upload the PDF documents you'd like to chat with.</p>
              </div>
            </div> <br />
            <div className="step-item">
              <div className="left"> <img src="/card2.png" alt="ai read pdf online" /> </div>
              <div className="right">
                <h1 className="text-light text-center">Instant answers</h1>
                <p className="text-light text-center w-50 mx-auto">Easily upload the PDF documents you'd like to chat with.</p>
              </div>
            </div> <br />
            <div className="step-item">
              <div className="left"> <img src="/card3.png" alt="ai read pdf free" /> </div>
              <div className="right">
                <h1 className="text-light text-center">Sources included</h1>
                <p className="text-light text-center w-50 mx-auto">Easily upload the PDF documents you'd like to chat with.</p>
              </div>
            </div>
          </div>
        </section> 
        </div>
        <Test />
        <Footer />
      </Mobile>
      <Desktop>
      <Header />
      
      <div
        className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20"
        style={{
          backgroundImage: "url('/Mask.png')",
        }}
      >
        <div className="flex justify-between p-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: "40px",
                marginTop: "6rem",
              }}
            >
              Chat with any PDF document.
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 mr-10">
              From legal agreements to financial reports, brings your documents
              to life. You can ask questions, get summaries, find information,
              and more.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/signup"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start for free
              </Link>
              <a
                href="#demo"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mx-auto mt-8"></div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  alt=""
                  src="/Group 19.png"
                  width="1385"
                  height="300px"
                  decoding="async"
                  data-nimg="1"
                  className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  loading="lazy"
                  style={{
                    color: "transparent",
                    height: "500px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Index />
      {/* <Detail /> */}
      <Test />
      <Footer />
      </Desktop>
    </div>
  );
};

export default Landingpage;
