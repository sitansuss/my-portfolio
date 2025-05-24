// src/components/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>© {currentYear} Sitansu Sekhar Mohanty. All rights reserved.</p>
        <p className="footer-note">
          Built with React & Custom CSS.
        </p>
      </div>
    </footer>
  );
};
export default Footer;