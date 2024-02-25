import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/styles.css';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
