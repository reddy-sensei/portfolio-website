import React from "react";
import Arrow from "./Arrow";
import './Header.css';

function Header() {
  return (
    <div
      style={{ backgroundImage: "url(/images/image2.jpg)" }}
      className="container"
    >
      <div className="info">
        <div className="info-greeting">
          <h1>Hi, i am</h1>
        </div>
        <div className="info-name"> Nitish Reddy</div>
        <div className="description">
          <div className="description-info">Web Developer</div>
          <div className="description-info-left">Fullstack Developer</div>
        </div>
      </div>
      <div className="arrow">
        <Arrow />
      </div>
    </div>
  );
}

export default Header;
