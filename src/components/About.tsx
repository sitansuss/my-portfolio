// src/components/About.tsx
import React from 'react';
import './About.css';
import { useInView } from 'react-intersection-observer'; // Import

const About: React.FC = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 150, // Slight delay
  });

  return (
    <section id="about-section" className="about-section">
      <div className="container">
        <h2
          ref={titleRef}
          className={`section-title text-center ${titleInView ? 'slide-in-left-visible' : 'slide-in-left-hidden'}`}
        >
          About Me
        </h2>
        <div
          ref={contentRef}
          className={`about-content ${contentInView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <p>
            I'm an Adaptable Developer with a strong background in crafting innovative software solutions. My journey into tech was driven by a fascination with how code can transform ideas into reality. I hold a Master of Computer Application from Lovely Professional University and have a proven track record in streamlining processes and enhancing user experiences.
          </p>
          <p>
            My experience at Mastek honed my skills in Python and data management, while my personal projects reflect my deep dive into the React ecosystem. I'm committed to continuous learning, staying current with emerging technologies, and delivering high-quality code.
          </p>
          <p>
            I'm passionate about collaborating with cross-functional teams to drive project success and achieve business goals. I'm particularly interested in roles where I can leverage my React expertise to build impactful and user-friendly applications.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;