import React from "react";
import "./Footer.css";
import { IoMdContact } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FaHackerrank, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <h1 className="contact">Contact me</h1>
        <ul>
          <li className="contact-me">
            <IoMdContact className="info-font" /> Nitish Reddy
          </li>
          <li className="contact-me">
            <HiOutlineMail className="info-font" />
            nitishkreddy99@gmail.com
          </li>
          <li className="contact-me">
            <AiFillPhone className="info-font" />
            +91 8861885131
          </li>
          <li className="contact-me">
            <MdLocationOn className="info-font" />
            Bangalore, INDIA
          </li>
        </ul>
      </div>
      <div className="footer-icons">
     
        <div>
          <a href="https://www.linkedin.com/in/nitishreddy9/">
          <FaLinkedin className="footer-icon-linkedin" />
          </a>
        </div>
        <div>
          <a href="https://www.hackerrank.com/nitishkreddy99">
          <FaHackerrank className="footer-icon-hackerrank" />
          </a>
        </div>
        <div>
          <FaTwitter className="footer-icon-twitter" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
