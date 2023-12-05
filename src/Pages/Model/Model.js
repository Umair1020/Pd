import React, { useState } from "react";
import "./model.css";
import { useNavigate } from "react-router-dom";
import { useFile } from "../../FIleContext";
const Model = ({ hide }) => {
  const navigate = useNavigate();
  const { setFile, file } = useFile();
  const [isOcrChecked, setIsOcrChecked] = useState(false);
  console.log(file);
  const handleUrl = () => {
    if (isOcrChecked) {
      navigate("/ocrpdf");
    } else {
      navigate("/ask");
    }
  };
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        localStorage.setItem("fileData", e.target.result);
        localStorage.setItem("fileName", file.name);
        localStorage.setItem("fileType", file.type);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="sc-f44562c1-0 boSApP">
      {/* {pdfBlobUrl && (
        <iframe
          src="http://localhost:3000/46853edb-a231-41ae-810c-3990203d474a"
          style={{ width: "100%", height: "500px" }}
          frameBorder="0"
        ></iframe>
      )} */}
      <div
        className="sc-f44562c1-1 cseGOX"
        style={{ maxWidth: "500px", margin: "auto" }}
        data-show=""
      >
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "flex-end",
          }}
        >
          <button
            onClick={hide}
            style={{
              background: "red",
              color: "white",
              height: "30px",
              width: "30px",
              borderRadius: "10px",
            }}
          >
            X
          </button>
        </div>

        <h3 className="sc-ebf96a8a-0 kuNXAT">Upload a document</h3>
        <p className="sc-ebf96a8a-1 bYmorg"></p>
        <div>
          <div className="space-y-4" style={{ cursor: "pointer" }}>
            <div
              className="h-40 w-full relative text-center"
              style={{ cursor: "pointer" }}
            >
              <input
                className="cursor-pointer hidden"
                style={{ cursor: "pointer" }}
                type="file"
                id="input-file-upload"
                required
                accept="application/pdf"
                onChange={handleFileChange}
              />
              <label
                style={{ cursor: "pointer" }}
                className="h-full flex items-center justify-center border rounded transition-all bg-white border-dashed border-stone-300"
                for="input-file-upload"
              >
                <div className="cursor-pointer">
                  <p className="pointer-events-none font-medium text-base leading-6 pointer opacity-75">
                    Select a document
                  </p>
                  <p className="pointer-events-none font-medium text-sm leading-6 pointer text-gray-600 opacity-75">
                    Max file size 10MB
                  </p>
                </div>
              </label>
            </div>
            <div className="flex items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 uppercase text-gray-600 text-xs">
                or
              </span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="pointer-events-none font-medium text-base leading-6 pointer opacity-75">
                Import from URL
              </label>
              <div className="sc-1c859520-0 jHAXMR">
                <input
                  className="sc-1c859520-1 cvZGAj grow text-sm"
                  type="url"
                  placeholder="https://cdn.openai.com/papers/gpt-4.pdf"
                  value=""
                />
              </div>
            </div>
            <div className="mb-2 space-y-2">
              <div className="flex justify-between">
                <label className="pointer-events-none font-medium text-base leading-6 pointer opacity-75">
                  Tags
                </label>
                <p className="pointer-events-none font-medium text-sm leading-6 pointer text-gray-600 opacity-75">
                  Optional
                </p>
              </div>
              <div className=" css-b62m3t-container">
                <span
                  id="react-select-2-live-region"
                  className="css-7pg0cj-a11yText"
                ></span>
                <span
                  aria-live="polite"
                  aria-atomic="false"
                  aria-relevant="additions text"
                  className="css-7pg0cj-a11yText"
                ></span>
                <div className=" css-69eoc8-control">
                  <div className=" css-hlgwow">
                    <div
                      className=" css-1jqq78o-placeholder"
                      id="react-select-2-placeholder"
                    >
                      Select or create a new tag
                    </div>
                    <div className=" css-19bb58m" data-value="">
                      <input
                        className=""
                        autocapitalize="none"
                        autocomplete="off"
                        autocorrect="off"
                        id="react-select-2-input"
                        spellcheck="false"
                        tabindex="0"
                        type="text"
                        aria-autocomplete="list"
                        aria-expanded="false"
                        aria-haspopup="true"
                        role="combobox"
                        aria-describedby="react-select-2-placeholder"
                        value=""
                        style={{
                          color: "inherit",
                          background: "0px center",
                          opacity: "1",
                          width: "100%",
                          gridArea: "1 / 2 / auto / auto",
                          font: "inherit",
                          minWidth: "2px",
                          border: "0px",
                          margin: "0px",
                          outline: "0px",
                          padding: "0px",
                        }}
                        fdprocessedid="i5i6f"
                      />
                    </div>
                  </div>
                  <div className=" css-1wy0on6">
                    <span className=" css-1u9des2-indicatorSeparator"></span>
                    <div
                      className=" css-1xc3v61-indicatorContainer"
                      aria-hidden="true"
                    >
                      <svg
                        height="20"
                        width="20"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        focusable="false"
                        className="css-8mmkcg"
                      >
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <span
                aria-label="This PDF file will not be stored on our servers. 
You will only be able to chat with this document but not view it. 
This document will be removed after 7 days of inactivity."
                data-microtip-position="top"
                role="tooltip"
              >
                <span className="flex items-center">
                  <input
                    id="private-doc"
                    type="checkbox"
                    className="cursor-pointer w-4 h-4 accent-orange-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label
                    for="private-doc"
                    className="cursor-pointer ml-2 text-sm font-medium text-gray-900"
                  >
                    Private document?
                  </label>
                </span>
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span
                aria-label="Optical character recognition.
Makes the text of a scanned document searchable."
                data-microtip-position="top"
                role="tooltip"
              >
                <span className="flex items-center">
                  <input
                    id="ocr-doc"
                    type="checkbox"
                    className="cursor-pointer w-4 h-4 accent-orange-600 bg-gray-100 border-gray-300 rounded"
                    checked={isOcrChecked}
                    onChange={(e) => setIsOcrChecked(e.target.checked)}
                  />
                  <label
                    for="ocr-doc"
                    className="cursor-pointer ml-2 text-sm font-medium text-gray-900"
                  >
                    OCR
                  </label>
                </span>
              </span>
            </div>
            <div className="flex justify-between items-center py-1 space-x-3">
              <button
                type=""
                disabled=""
                className="sc-7ff41d46-0 aEnZv"
                onClick={handleUrl}
              >
                Upload
              </button>
              <button
                type="button"
                className="sc-7ff41d46-0 aEnZv !bg-[#f8f5ee] !text-black/75"
                style={{ border: "1px solid rgb(229, 227, 218)" }}
                fdprocessedid="9z47ta"
                onClick={hide}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
