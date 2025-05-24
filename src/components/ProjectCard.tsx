// src/components/ProjectCard.tsx
import React from 'react';
import './ProjectCard.css';
import type { Project as ProjectType } from '../types';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';

interface ProjectCardProps extends ProjectType {
  delay?: number;
  imagePosition?: 'left' | 'right'; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title, description, imageUrl, techStack, liveLink, codeLink, // codeLink is now used
  delay = 0, imagePosition = 'left'
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  // "Learn More" button and its handler are removed

  return (
    <div
      ref={ref}
      className={`project-card-outer-wrapper-new ${inView ? 'scale-up-visible' : 'scale-up-hidden'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Tilt
        className="parallax-tilt-glare-scale-new"
        tiltMaxAngleX={5} 
        tiltMaxAngleY={5}
        perspective={1000}
        transitionSpeed={1500}
        scale={1.02} 
        gyroscope={true}
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor="rgba(255, 255, 255, 0.1)"
        glarePosition="all"
        glareBorderRadius="var(--border-radius)"
      >
        <div className={`project-card-new ${imagePosition === 'right' ? 'image-right' : 'image-left'}`}>
          <div className="project-image-column-new">
            <img src={imageUrl} alt={title} className="project-image-new" />
          </div>
          <div className="project-content-column-new">
            <h3 className="project-title-new">{title}</h3>
            <p className="project-description-new">{description}</p>
            <div className="project-tech-stack-new">
              <h4>Tech Stack:</h4>
              <ul>
                {techStack.map(tech => <li key={tech}>{tech}</li>)}
              </ul>
            </div>
            <div className="project-links-new"> {/* This div contains the two main action buttons */}
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live Demo
              </a>
              {/* Conditionally render the "View Code" button only if codeLink exists */}
              {codeLink && (
                <a href={codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};
export default ProjectCard;