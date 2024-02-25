import React from 'react';
import project1Image from '../assets/images/project1.jpg';
import project2Image from '../assets/images/project2.jpg';
import project3Image from '../assets/images/project3.jpg';
import project4Image from '../assets/images/project4.jpg';
import project5Image from '../assets/images/project5.jpg';
import project6Image from '../assets/images/project6.jpg';
import project7Image from '../assets/images/project7.jpg';


function Projects() {
  return (
    <section id="projects" className="card">
      <h2>Projects</h2>
      <div className="project-container">
        <a href="https://clinquant-melomakarona-2ce80f.netlify.app/" target="_blank" rel="noreferrer">
          <img src={project1Image} alt="Project 1" className="project-image" />
        </a>
        <a href="https://bucolic-croquembouche-5577a2.netlify.app/" target="_blank" rel="noreferrer">
          <img src={project2Image} alt="Project 2" className="project-image" />
        </a>
        <a href="https://ornate-cendol-bd7615.netlify.app/" target="_blank" rel="noreferrer">
          <img src={project3Image} alt="Project 3" className="project-image" />
        </a>
        <a href="https://cheery-beijinho-f01862.netlify.app/" target="_blank" rel="noreferrer">
          <img src={project4Image} alt="Project 4" className="project-image" />
        </a>
        <a href="https://effulgent-melomakarona-abcfa2.netlify.app/" target="_blank" rel="noreferrer">
          <img src={project5Image} alt="Project 5" className="project-image" />
        </a>
        <a href="https://cerulean-chaja-1b19a6.netlify.app/" target="_blank" rel="noreferrer">
          <img src={project6Image} alt="Project 6" className="project-image" />
        </a>
        <a href="https://elaborate-marzipan-505cfb.netlify.app/" target="_blank" rel="noreferrer">
          <img src={project7Image} alt="Project 7" className="project-image" />
        </a>
      </div>
    </section>
  );
}

export default Projects;
