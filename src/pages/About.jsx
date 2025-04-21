// About.js
import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About GrowCode</h2>
        <p className="text-lg text-gray-600 mb-6">
          GrowCode is an IT services provider dedicated to delivering cutting-edge technology solutions. We focus on creating impactful and efficient solutions that help businesses grow and thrive in the digital age.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="text-3xl text-blue-500 mb-4">🌍</div>
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-center text-gray-600">
              Our mission is to provide innovative IT solutions that empower businesses to achieve their goals through technology.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl text-blue-500 mb-4">💡</div>
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="text-center text-gray-600">
              We envision a future where technology drives efficiency, creativity, and success for businesses across the globe.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl text-blue-500 mb-4">🔧</div>
            <h3 className="text-xl font-semibold">Our Services</h3>
            <p className="text-center text-gray-600">
              From Mobile App Development to Cloud Hosting, GrowCode offers a full range of IT services to support your digital transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
