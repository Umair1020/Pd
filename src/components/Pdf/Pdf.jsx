import React, { useState } from "react";
import "./pdf.css";

const Pdf = ({ file }) => {
  console.log(file);
  // No need for numPages or onDocumentLoadSuccess since we're not using react-pdf

  return (
    <div className="split-screen-container">
      <div className="pdf-viewer">
        <embed src={file} type="application/pdf" width="100%" height="100%" />
      </div>
      <div className="chat-box">
        {/* Chat box component */}
        {/* Implement your chat UI here */}
      </div>
    </div>
  );
};

export default Pdf;
