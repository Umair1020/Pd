import React from "react";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <div>
      <Link
        className="relative inline-flex"
        to="/resumescanner"
        style={{ flex: "0 0 400px", display: "flex" }}
      >
        <div className="flex flex-col shadow bg-white rounded-md text-black p-8 m-5 space-y-5 w-full hover:bg-gray-50">
          <img
            src="https://imagedelivery.net/pcavElAZUUevXK53Dl4vWA/1fac7ae0-44f3-44c5-3874-f41870765500/public"
            alt="Resume Checker"
            className="h-12 w-auto flex-none bg-white object-contain border-none self-start"
          />
          <span className="text-xl font-semibold">Resume Checker</span>
          <span className="text-gray-700">
            Use AI to roast/review your resume and receive feedback to improve
            it.
          </span>
        </div>
        <span className="absolute top-8 right-8 rounded-full bg-[#FF612E] px-2.5 py-1 text-xs font-bold text-white shadow-sm ring-0">
          AI
        </span>
      </Link>
    </div>
  );
};

export default Tools;
