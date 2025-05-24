// src/components/Projects.tsx
import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'; 
import type { Project } from '../types'; 
import { useInView } from 'react-intersection-observer';

const projectData: Project[] = [
  {
    title: "BudgetBuddy - Personal Finance Manager",
    description: "This web app helps users manage their personal finances easily. Built with React, it allows users to track their income, expenses, and set budget goals. Uses React Router for navigation and React Toastify for notifications. Responsive design with Heroicons.",
    imageUrl: "https://placehold.co/600x400/312E81/E0E7FF?text=BudgetBuddy",
    techStack: ['React', 'React Router', 'React Toastify', 'Heroicons', 'CSS'],
    liveLink: "https://budgetbuddy-omega.vercel.app/",
    codeLink: "https://github.com/sitansuss/budgetbuddy" // << REPLACE THIS with your actual GitHub link
  },
  {
    title: "Search Flix GPT - Movie Search & Browsing",
    description: "A dynamic web application leveraging React, Redux, React Router, and custom CSS. It offers an immersive movie search experience. GPT integration enhances movie search capabilities.",
    imageUrl: "https://placehold.co/600x400/4338CA/F3F4F6?text=SearchFlix+GPT",
    techStack: ['React', 'Redux', 'React Router', 'GPT API', 'Custom CSS'],
    liveLink: "https://search-flix-gpt.vercel.app/",
    codeLink: "https://github.com/sitansuss/search_flix_gpt" // << REPLACE THIS with your actual GitHub link
  },
  // Add more projects here with their actual codeLink
];

const Projects: React.FC = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="projects-section" className="projects-section">
      <div className="container">
        <h2
          ref={titleRef}
          className={`section-title text-center ${titleInView ? 'slide-in-left-visible' : 'slide-in-left-hidden'}`}
        >
          Featured Projects
        </h2>
        <div className="projects-list-new"> 
          {projectData.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project} // This will pass codeLink to ProjectCard
              delay={index * 100} 
              imagePosition={index % 2 === 0 ? 'left' : 'right'} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;