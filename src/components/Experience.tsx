// src/components/Experience.tsx
import React from 'react';
import './Experience.css';
import type { ExperienceItem } from '../types';
import { useInView } from 'react-intersection-observer'; // Import

const experienceData: ExperienceItem = {
  // ... same data as before
  role: "Associate Technical Consultant",
  company: "Mastek",
  dates: "[Your Start Date] – [Your End Date]",
  responsibilities: [
    "Facilitated seamless migration of data from client servers to Oracle data server, employing automation techniques.",
    "Expertly filtered and extracted pertinent information using Python, enhancing efficiency and accuracy in data processing.",
    "Proficiently developed robust business logic using Java's Groovy rule, improving overall system functionality."
  ]
};

const Experience: React.FC = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: itemRef, inView: itemInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 150,
  });

  return (
    <section id="experience-section" className="experience-section">
      <div className="container">
        <h2
          ref={titleRef}
          className={`section-title text-center ${titleInView ? 'slide-in-left-visible' : 'slide-in-left-hidden'}`}
        >
          Professional Experience
        </h2>
        <div
          ref={itemRef}
          className={`experience-item ${itemInView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <h3 className="experience-role">{experienceData.role}</h3>
          <p className="experience-company">{experienceData.company}</p>
          <p className="experience-dates">{experienceData.dates}</p>
          <ul className="experience-responsibilities">
            {experienceData.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Experience;