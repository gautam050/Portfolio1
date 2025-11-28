import React from "react";
import "./Header.css";

export default function Header() {
  const handleResumeClick = () => {
    const fileUrl = "/resume/Ashutosh_Singh_Resume.pdf";

    // Open in new tab
    const newTab = window.open(fileUrl, "_blank");
    if (newTab) {
      // Trigger download in new tab
      newTab.onload = function () {
        const a = newTab.document.createElement("a");
        a.href = fileUrl;
        a.download = "Ashutosh-Singh-Resume.pdf";
        newTab.document.body.appendChild(a);
        a.click();
      };
    }
  };

  return (
    <div className="header">
      <a href="#" className="logo">Portfolio</a>

      <div className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Projects</a>
        <a href="#contact">Contact</a>

        <button
          className="download-btn"
          onClick={handleResumeClick}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}
