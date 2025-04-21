import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

const Hero = () => {
  useFadeIn(); // Activate the fade-in functionality

  return (
    <section className="hero relative overflow-hidden bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="hero-content text-center">
          <h1 className="hero-title text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 fade-in">
            Transforming Ideas into <span className="gradient-text bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Digital Reality</span>
          </h1>
          <p className="hero-description mt-4 text-lg text-gray-600 dark:text-gray-300 fade-in fade-in-delay-1">
            GrowCode delivers innovative IT solutions that help businesses thrive in the digital landscape. Our expert team turns your vision into powerful, scalable technology.
          </p>
          <div className="hero-buttons mt-6 flex justify-center space-x-4 fade-in fade-in-delay-2">
            <a href="#contact" className="btn btn-primary btn-lg bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </a>
            <a href="#services" className="btn btn-outline btn-lg border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
              Learn More
            </a>
          </div>
        </div>
      </div>

      
      <div className="bg-blob">
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
      </div>

      
    </section>
  );
};

export default Hero;
