import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landingpage from "./Landingpage";
import Login from "./components/Login/Login";
import Demo from "./Pages/Demo";
import Cookies from "js-cookie";
import Document from "./Pages/Document/Document";
import Compare from "./Pages/Compare/Compare";
import SignUp from "./components/Login/SignUp";
import OcrPdf from "./Pages/OcrPdf/OcrPdf";
import PdfView from "./components/Pdf/Part";
import Pdfscanner from "./Pages/Pdfscanner";
import Usecause from "./Pages/UseCause/Usecause";
import Tools from "./Pages/Tools/Tools";
import Test from "./Pages/Pricing/Test";

const userCookie = Cookies.get("user");
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={userCookie ? <Navigate to="/Document" /> : <Landingpage />}
      />
      <Route path="/price" element={<Test />} />
      <Route path="/pdfview" element={<PdfView />} />
      <Route path="/usecases" element={<Usecause />} />
      <Route path="/tools" element={<Tools />} />

      <Route
        path="/login"
        element={userCookie ? <Navigate to="/Document" /> : <Login />}
      />
      <Route
        path="/signup"
        element={userCookie ? <Navigate to="/Document" /> : <SignUp />}
      />
      <Route
        path="/Document"
        element={userCookie ? <Document /> : <Navigate to="/login" />}
      />
      <Route
        path="/pdf/:id"
        element={userCookie ? <Demo /> : <Navigate to="/login" />}
      />
      <Route
        path="/ask"
        element={userCookie ? <Demo /> : <Navigate to="/login" />}
      />
      <Route
        path="/compare"
        element={userCookie ? <Compare /> : <Navigate to="/login" />}
      />
      <Route
        path="/Ocrpdf"
        element={userCookie ? <OcrPdf /> : <Navigate to="/login" />}
      />
      <Route path="/resumescanner" element={<Pdfscanner />} />
    </Routes>
  );
}

export default App;
