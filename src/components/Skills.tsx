// src/components/Skills.tsx
import React, { useState } from 'react';
import './Skills.css';
import { useInView } from 'react-intersection-observer';

interface SkillOrb {
  id: string;
  name: string;
  size: number;
  distance: number;
  angle: number;
  speed: number;
  description?: string;
  icon?: string; // e.g., '/icons/react.svg' if you add icons to public/icons/
}

// Data fetched and structured from your resume
const coreSkillsData: SkillOrb[] = [
  // --- Inner Orbit: Core & Most Prominent ---
  { id: 'react', name: 'React.js', size: 100, distance: 130, angle: 0, speed: 28, description: "Modern UI Development" },
  { id: 'javascript', name: 'JavaScript (ES6+)', size: 95, distance: 130, angle: 90, speed: 28, description: "The Language of the Web" },
  { id: 'htmlcss', name: 'HTML5 & CSS3', size: 90, distance: 130, angle: 180, speed: 28, description: "Web Structure & Styling" },
  { id: 'python', name: 'Python', size: 85, distance: 130, angle: 270, speed: 28, description: "Versatile & Powerful" },

  // --- Middle Orbit: Key Supporting Technologies ---
  { id: 'typescript', name: 'TypeScript', size: 80, distance: 210, angle: 30, speed: 38, description: "JavaScript Superset" },
  { id: 'redux', name: 'Redux / Toolkit', size: 75, distance: 210, angle: 120, speed: 38, description: "State Management" },
  { id: 'sql', name: 'SQL', size: 70, distance: 210, angle: 210, speed: 38, description: "Database Language" },
  { id: 'git', name: 'Git & GitHub', size: 80, distance: 210, angle: 300, speed: 38, description: "Version Control" },
  
  // --- Outer Orbit: Frameworks, Libraries, Concepts ---
  { id: 'tailwind', name: 'Tailwind CSS', size: 70, distance: 290, angle: 60, speed: 48, description: "Utility-First CSS" },
  { id: 'bootstrap', name: 'Bootstrap', size: 65, distance: 290, angle: 150, speed: 48, description: "Responsive Framework" },
  { id: 'angular', name: 'Angular JS (Familiar)', size: 60, distance: 290, angle: 240, speed: 48, description: "MVC Framework" },
  { id: 'problemSolving', name: 'Problem Solving', size: 70, distance: 290, angle: 330, speed: 48, description: "Analytical Skills" },
];


const Skills: React.FC = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: orbitSystemRef, inView: orbitSystemInView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  const [hoveredSkill, setHoveredSkill] = useState<SkillOrb | null>(null);

  return (
    <section id="skills-section" className="skills-section">
      <div className="container">
        <h2
          ref={titleRef}
          className={`section-title text-center ${titleInView ? 'slide-in-left-visible' : 'slide-in-left-hidden'}`}
        >
          My Technical Universe
        </h2>

        <div
            ref={orbitSystemRef}
            className={`orbit-container ${orbitSystemInView ? 'animate-in' : ''}`}
            onMouseLeave={() => setHoveredSkill(null)}
        >
          <div className="orbit-center">
            <span>{hoveredSkill ? hoveredSkill.name : "My Skills"}</span>
            {hoveredSkill && hoveredSkill.description && (
                <p className="skill-description-tooltip">{hoveredSkill.description}</p>
            )}
          </div>

          {coreSkillsData.map((skill) => (
            <div
              key={skill.id}
              className="skill-orb-path"
              style={{
                width: `${skill.distance * 2}px`,
                height: `${skill.distance * 2}px`,
                animationDuration: `${skill.speed}s`,
                animationPlayState: orbitSystemInView ? 'running' : 'paused', // Start animation when in view
              }}
            >
              <div
                className="skill-orb"
                style={{
                  width: `${skill.size}px`,
                  height: `${skill.size}px`,
                  // This transform places the orb's center on its orbital path at the specified angle
                  transform: `translateX(-50%) translateY(-50%) rotate(${skill.angle}deg) translateY(-${skill.distance}px) rotate(-${skill.angle}deg)`,
                }}
                onMouseEnter={() => setHoveredSkill(skill)}
              >
                {skill.icon ? <img src={skill.icon} alt={skill.name} /> : skill.name}
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={`namaste-react-highlight ${orbitSystemInView ? 'reveal-visible' : 'reveal-hidden'}`} 
          style={{transitionDelay: orbitSystemInView ? '0.5s' : '0s' }} // Apply delay only when animating in
        >
          <h3>Namaste React Course</h3>
          <p>
            Deepened my React expertise, mastering: Advanced Bundling, Redux Toolkit, Performance Optimization (Lazy Loading, Shimmer UI), and Dynamic Routing.
          </p>
        </div>

      </div>
    </section>
  );
};
export default Skills;