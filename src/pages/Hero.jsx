import React from 'react';
import useFadeIn from '../hooks/useFadeIn';
import '../page.css'; 
import Services from './Services';
import Projects from './Projects';
import Team from './Team';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Hpro from './Hpro';
import Habout from './Habout';

const Hero = () => {
  useFadeIn();

  return (
    <>
      <section className="relative pt-24 pb-40 bg-white">
      
     
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none  animate-bgShift"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center ">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
          Turning Ideas Into <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Digital Reality</span>
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
          GrowCode provides innovative IT solutions that empower businesses to thrive in an ever-evolving digital world.
          Our team brings your ideas to life through seamless, scalable technology.
        </p>

        <div className="flex justify-center gap-8">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all ease-in-out duration-300"
          >
            Get Started
          </a>
          <a
            href="/services"
            className="bg-white text-blue-600 border border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
      <div class="bg-blob">
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
      </div>
     
    </section>
      <Habout />
      <Services />
      <Hpro />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Hero;
