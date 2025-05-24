// src/components/Hero.tsx
import React from 'react';
import './Hero.css'; // Make sure Hero.css is imported
import { TypeAnimation } from 'react-type-animation';

// import { FaLinkedin, FaGithub } from 'react-icons/fa'; // If you use these for social links

const Hero: React.FC = () => {
  const heroTitleText = "Sitansu Sekhar Mohanty"; // Store text for data-text attribute

  // Your existing scroll handler
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    const navbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height'), 10) || 60;
    const projectsSection = document.getElementById('projects');
    if(projectsSection) {
        const sectionTop = projectsSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: sectionTop, behavior: 'smooth'});
    }
  };

  return (
    <section id="hero-section" className="hero-section">
      <div className="container hero-content">
        {/* Optional: Your Photo */}
        {/* <img src="/images/sitansu-photo.jpg" alt="Sitansu Sekhar Mohanty" className="hero-photo"/> */}

        <h1
          className="hero-title hero-load-animate glitch-effect" // ADDED glitch-effect class
          style={{ animationName: 'fadeInSlideUp', animationDelay: '0.3s' }}
          data-text={heroTitleText} // ADDED data-text attribute
        >
          {heroTitleText} 
        </h1>

        <div className="hero-typewriter-container">
          <TypeAnimation
            sequence={[
              'A React Developer.', 2000,
              'A Full-Stack Enthusiast.', 2000,
              'A Problem Solver.', 2000,
              'Building Innovative Web Solutions.', 2500,
            ]}
            wrapper="span" 
            cursor={true}
            repeat={Infinity} 
            style={{ 
              fontSize: '1.5em', 
              display: 'inline-block', 
              color: 'var(--primary-color)', 
              fontWeight: 500,
            }}
            className="hero-typewriter-text" 
          />
        </div>

        <p className="hero-description hero-load-animate" style={{ animationName: 'fadeIn', animationDelay: '0.9s' }}>
          Hello! I'm Sitansu, specializing in creating intuitive and efficient web applications. Explore my work and let's connect.
        </p>
        
        <div className="hero-cta-buttons hero-load-animate" style={{ animationName: 'fadeInScaleUp', animationDelay: '1.2s' }}>
          <a href="#projects" onClick={handleScrollToProjects} className="btn btn-primary">
            View My Projects
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Download Resume
          </a>
        </div>
        
        <div className="hero-social-links hero-load-animate" style={{ animationName: 'fadeIn', animationDelay: '1.5s' }}>
          <a href="https://www.linkedin.com/in/sitansu-sekhar-mohanty-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="https://github.com/sitansuss" target="_blank" rel="noopener noreferrer" aria-label="GitHub"> {/* Remember to replace [YOUR_GITHUB_LINK] */}
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;