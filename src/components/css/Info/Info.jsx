import React from "react";
import "./style.css";

const Info = () => {
  return (
    <div className="index">
      <div className="group-wrapper">
        <div className="group">
          <div className="frame">
            <div className="div">
              <div className="img-wrapper">
                <img
                  className="img"
                  alt="Group"
                  src="https://cdn.animaapp.com/projects/656a9ddc669e93c71e53481a/releases/656dd1bb2036a74528f26e21/img/group-6.png"
                />
              </div>
              <div className="frame-2">
                <div className="text-wrapper">Upload Documents</div>
                <p className="p">
                  Easily Upload The Pdf Documents You&#39;d Like To Chat With.
                </p>
              </div>
            </div>
            <div className="div">
              <img
                className="group-2"
                alt="Group"
                src="https://cdn.animaapp.com/projects/656a9ddc669e93c71e53481a/releases/656dd1bb2036a74528f26e21/img/group-12.png"
              />
              <div className="frame-2">
                <div className="text-wrapper">Instant Answers</div>
                <p className="p">
                  Ask Questions, Extract Information, And Summarize Documents
                  With Ai.
                </p>
              </div>
            </div>
            <div className="div">
              <img
                className="group-3"
                alt="Group"
                src="https://cdn.animaapp.com/projects/656a9ddc669e93c71e53481a/releases/656dd1bb2036a74528f26e21/img/group-13.png"
              />
              <div className="sources-included">Sources Included</div>
              <p className="p">
                Every Response Is Backed By Sources Extracted From The Uploaded
                Document.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
