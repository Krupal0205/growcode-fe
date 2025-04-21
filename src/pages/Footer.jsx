import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <a href="#" className="footer-logo">GrowCode</a>
              <p className="footer-description">Transforming ideas into digital reality with innovative IT solutions.</p>
              <div className="footer-social">
                <a href="#" className="footer-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="footer-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="footer-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16v16H4z"></path>
                    <path d="M8 11v5M12 8v8M16 11v5"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="footer-title">Contact Info</h3>
              <ul className="footer-links">
                <li><a href="#">123 Tech Park, Ahmedabad</a></li>
                <li><a href="#">+91 98765 43210</a></li>
                <li><a href="#">info@growcode.com</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="footer-title">Newsletter</h3>
              <p className="footer-description">Subscribe to our newsletter for the latest updates.</p>
              <form className="footer-newsletter">
                <div className="footer-form">
                  <input type="email" className="footer-input" placeholder="Your email address"></input>
                  <button type="submit" className="btn btn-primary">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="footer-bottom">
            &copy; 2024 GrowCode IT Solutions. All rights reserved.
          </div>
        </div>
      </footer>
  
  );
};

export default Footer;

// if (route.path === "" || !route.path?.includes("?")) {
// }
