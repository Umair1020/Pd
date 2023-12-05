import "./main.css";
import "../index.css";
import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import DemoFile from "./DemoFile";
import { useFile } from "../FIleContext";
import Pdf from "../components/Pdf/Pdf";
const Main = ({ click, pdfDoc, userId }) => {
  const [pdfFile, setPdfFile] = useState(null);
  const { file } = useFile();
  console.log(file);
  useEffect(() => {
    const fileData = localStorage.getItem("fileData");
    const fileName = localStorage.getItem("fileName");
    const fileType = localStorage.getItem("fileType");

    if (fileData) {
      const byteString = atob(fileData.split(",")[1]);
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: fileType });
      const blobUrl = URL.createObjectURL(blob);
      setPdfFile(blobUrl);
    }
  }, []);
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  return (
    <>
      <Mobile>
        <div className="" style={{ display: "block", width: "100%", height: "50vh" }}>
          <div style={{ flexBasis: "50%", flexGrow: 0, flexShrink: 0 }}>
            <Pdf file={pdfFile ? pdfFile : click} />
          </div>
          <div style={{ flexBasis: "50%", flexGrow: 0, flexShrink: 0 }}>
            <DemoFile pdfDoc={file ? file : pdfDoc} userId={userId} />
          </div>
        </div>
      </Mobile>
      <Desktop>
        <div className="" style={{ display: "flex", width: "100%", height: "100vh" }}>
          <div style={{ flexBasis: "50%", flexGrow: 0, flexShrink: 0 }}>
            <Pdf file={pdfFile ? pdfFile : click} />
          </div>
          <div style={{ flexBasis: "50%", flexGrow: 0, flexShrink: 0 }}>
            <DemoFile pdfDoc={file ? file : pdfDoc} userId={userId} />
          </div>
        </div>
      </Desktop>
    </>
  );
};

export default Main;
