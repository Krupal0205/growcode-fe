import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; // If you're using Tailwind via PostCSS or in index.css, make sure it's imported here too
import "./page.css";

// Import all components
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import ScrollToTopButton from "./pages/ScrollToTopButton";
import About from './pages/About'; // Import the About page component
import Growcodecontact from './pages/Growcodecontact'; // Import the Growcodecontact page component


const App = () => {
  return (
    <Router>
  <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
    <Navbar />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={
        <>
          <Hero />
          <Services />
          <Projects />
          <Team />
          <Testimonials />
          <Contact />
          <Footer />
          <ScrollToTopButton />
          <About />
          <Growcodecontact />
        </>
      } />
    </Routes>
  </div>
</Router>

  );
};


export default App;
