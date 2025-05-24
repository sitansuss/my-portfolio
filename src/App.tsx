// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './animations.css';
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <div id="hero"> <Hero /> </div>
        <div id="about"> <About /> </div>
        <div id="skills"> <Skills /> </div>
        <div id="projects"> <Projects /> </div>
        <div id="experience"> <Experience /> </div>
        <div id="contact"> <Contact /> </div>
      </main>
      <Footer />
    </>
  );
}
export default App;