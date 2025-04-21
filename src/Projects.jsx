import React from 'react'
import ProjectCard from './pages/ProjectCard';

const Projects = () => {
    return (
        <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title fade-in">Our Projects</h2>
          <p className="section-description fade-in fade-in-delay-1">Explore our portfolio of successful projects</p>
          
          <div className="tabs fade-in fade-in-delay-2">
            <button className="tab active" data-category="all">All</button>
            <button className="tab" data-category="web">Web</button>
            <button className="tab" data-category="mobile">Mobile</button>
            <button className="tab" data-category="ecommerce">E-commerce</button>
            <button className="tab" data-category="enterprise">Enterprise</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 projects-grid">
            
            <div className="project-card fade-in fade-in-delay-1" data-category="ecommerce">
              <div className="project-image">
                <img src="https://placehold.co/600x400/6366f1/ffffff" alt="E-commerce Platform"/>
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <span className="project-category">E-commerce</span>
                <h3 className="project-title">E-commerce Platform</h3>
                <p className="project-description">A comprehensive e-commerce solution with inventory management and secure payment processing.</p>
                <a href="#" className="project-link">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            
            <div className="project-card fade-in fade-in-delay-2" data-category="mobile">
              <div className="project-image">
                <img src="https://placehold.co/600x400/10b981/ffffff" alt="Banking Mobile App"/>
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <span className="project-category">Mobile</span>
                <h3 className="project-title">Banking Mobile App</h3>
                <p className="project-description">Secure mobile banking application with biometric authentication and real-time transactions.</p>
                <a href="#" className="project-link">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="project-card fade-in fade-in-delay-3" data-category="enterprise">
              <div className="project-image">
                <img src="https://placehold.co/600x400/8b5cf6/ffffff" alt="Healthcare Management System"/>
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <span className="project-category">Enterprise</span>
                <h3 className="project-title">Healthcare Management</h3>
                <p className="project-description">Integrated system for healthcare providers to manage patient data and streamline operations.</p>
                <a href="#" className="project-link">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="project-card fade-in fade-in-delay-1" data-category="web">
              <div className="project-image">
                <img src="https://placehold.co/600x400/ec4899/ffffff" alt="Travel Booking Platform"/>
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <span className="project-category">Web</span>
                <h3 className="project-title">Travel Booking Platform</h3>
                <p className="project-description">Online platform for booking flights, hotels, and experiences with personalized recommendations.</p>
                <a href="#" className="project-link">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    );
  };

  export default Projects;