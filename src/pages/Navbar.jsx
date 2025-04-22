import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <h1 className="text-3xl"><b>Grow<span className="text-purple-600">code</span></b> </h1>
        
        <div className="nav-links ">
          <Link to="/" className="hover:text-purple-600">Home</Link>
          <Link to="/about" className="hover:text-purple-600">About</Link>
          <Link to="/services" className="hover:text-purple-600">Services</Link> 
          <Link to="/career" className="hover:text-purple-600">Career</Link>
          <Link to="/portfolio" className="hover:text-purple-600">Portfolio</Link>
          <Link to="/blogs" className="hover:text-purple-600">Blogs</Link>
          <Link to="/contact" className="hover:text-purple-600">Contact</Link>
          
         
        </div>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <X size={24} /> 
          ) : (
            <Menu size={24} /> 
          )}
        </button>
      </div>
      
      <div className={`container mobile-menu ${isOpen ? 'open' : ''}`} >
      <Link to="/" >Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link> 
          <Link to="/career">Career</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
