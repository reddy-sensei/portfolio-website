import React from "react";
import './Description.css';
import { SiJavascript, SiMongodb, SiHtml5, SiCss3 } from "react-icons/si";
import { FaNode, FaReact } from "react-icons/fa";
import { FcDocument } from "react-icons/fc";

function Description() {

  const handleClick = () => {
    fetch('https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?id=1VocJe-vCz9GhRno3-YY76F564ayPiAgO&export=download', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
    .then((response) => response.blob())
    .then((blob) => {
      // Create blob link to download
      const url = window.URL.createObjectURL(
        new Blob([blob]),
      );
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        `resume.pdf`,
      );
  
      // Append to html link element page
      document.body.appendChild(link);
  
      // Start download
      link.click();
  
      // Clean up and remove the link
      link.parentNode.removeChild(link);
    });
  }

  return (
    <div className="description-container">
      <div className="sub-description">
        <h1>Hire Me</h1>
        <p>Im a web developer who just started out</p>
      </div>
      <div className="skills-container">
        <SiHtml5 className="html" />
        <SiCss3 className="css" />
        <SiJavascript className="javascript" />
        <FaNode className="nodejs" />
        <FaReact className="reactjs" />
        <SiMongodb className="mongodb" />
      </div>
      <div className="resume-container">
        <h4>My Resume</h4>
        <div>
          <FcDocument className="resume-icon" />
        </div>
        <div>
          <button className="resume-button" onClick={handleClick}>Download</button>
        </div>
      </div>
    </div>
  );
}

export default Description;
