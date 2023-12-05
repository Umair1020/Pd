import { useState } from "react";
import SplitScreen from "./Pdf";
import pdf from "../../assets/abc.pdf";
function PdfView({ file }) {
  console.log(file);
  const [showSplit, setShowSplit] = useState(false);

  // Dummy PDF file path - replace with your actual file path or state
  const pdfFilePath = pdf;

  return (
    <div>
      {/* Your other components */}
      <button onClick={() => setShowSplit(true)}>Open PDF and Chat</button>
      {showSplit && <SplitScreen file={file} />}
    </div>
  );
}

export default PdfView;
