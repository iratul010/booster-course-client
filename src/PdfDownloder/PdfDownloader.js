import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { FaDownload } from "react-icons/fa";
import { Button } from "react-bootstrap";

const PdfDownloader = ({ roofElementId, downloadFileName }) => {
  const downloadFileDocument = () => {
    const input = document.getElementById(roofElementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a2");
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save(`${downloadFileName}`);
    });
  };

  return (
    <div>
      <Button variant="info" className="mb-2 w-100" onClick={downloadFileDocument}>
        Download Page PDF
        <FaDownload></FaDownload>
      </Button>
    </div>
  );
};

export default PdfDownloader;
