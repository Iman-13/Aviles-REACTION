import React from 'react';
import { FaEnvelope, FaPhone, FaFacebook, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <a href="#"><FaEnvelope /></a>
        <a href="#"><FaPhone /></a>
        <a href="https://www.facebook.com/emmanuel.aviles.629348" target="_blank" rel="noreferrer"><FaFacebook /></a>
        <a href="https://github.com/Iman-13" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="copyright">
        &copy; 2025 Iman. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;