import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import useFadeIn from '../hooks/useFadeIn';
import p1 from '../img/th.jpg';
import p2 from '../img/th (1).jpg';
import p3 from '../img/th (2).jpg';
import p4 from '../img/th (3).jpg';

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    desc: 'A comprehensive e-commerce solution with inventory management and secure payment processing.',
    bg: p1
  },
  {
    id: 2,
    title: 'Banking Mobile App',
    desc: 'Secure mobile banking application with biometric authentication and real-time transactions.',
    bg: p2
  },
  {
    id: 3,
    title: 'Healthcare Management',
    desc: 'Integrated system for healthcare providers to manage patient data and streamline operations.',
    bg: p3
  },
  {
    id: 4,
    title: 'Travel Booking Platform',
    desc: 'Online platform for booking flights, hotels, and experiences with personalized recommendations.',
    bg: p4
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useFadeIn();

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 2) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 2 + projectsData.length) % projectsData.length);
  };

  const visibleProjects = [
    projectsData[currentIndex],
    projectsData[(currentIndex + 1) % projectsData.length],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % projectsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-16 px-4 bg-gradient-to-r from-indigo-50 to-blue-100 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white fade-in mb-12 relative inline-block">
          Our Projects
          <span className="block h-1 w-24 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mt-3 rounded-full"></span>
        </h2>

        {/* Cards side by side with no gap or padding */}
        <div className="flex w-full gap-6 px-0 fade-in mb-6 justify-center mt-16">
          {visibleProjects.map((project) => (
            <div key={project.id} className="w-full md:w-1/2 transform transition duration-500 hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Stylish buttons below the cards */}
        <div className="mt-8 flex justify-center items-center px-0 space-x-6 fade-in">
          <button
            onClick={handlePrev}
            className="bg-red-500  text-white px-6 py-3 rounded-full text-xl transition-transform transform hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-full text-xl transition-transform transform hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            →
          </button>

         
        </div>
      </div>
    </section>
  );
};

export default Projects;
