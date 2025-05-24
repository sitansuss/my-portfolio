// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector('.navbar')?.clientHeight || parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height'));
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems: { id: string, label: string }[] = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'mobile-open' : ''}`}>
      <div className="container navbar-container">
        <a href="#hero" className="navbar-brand" onClick={(e) => {e.preventDefault(); scrollToSection('hero');}}>
          Sitansu S. Mohanty
        </a>
        <button
          className="navbar-toggler"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className={`navbar-nav ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;