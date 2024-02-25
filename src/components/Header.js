import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import profile from '../assets/images/profile.jpg'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="name-role animated fadeInLeft">
          <h1>Nishanth K</h1>
          <p>Front End Developer</p>
          <p>Contact: +91 9894858054</p>
          <p>Email: nishanth10187@gmail.com</p>
        </div>
        <nav className="nav-links animated fadeInRight">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://linkedin.com/in/nishanth-kanagaraj-a87b8020a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Nishanth2331" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </nav>
      </div>
      <div className="profile-image animated fadeIn">
        <img src={profile} alt="Profile" />
      </div>
    </header>
  );
}

export default Header;
