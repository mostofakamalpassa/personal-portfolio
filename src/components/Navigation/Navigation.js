import React from 'react';
import './Navigation.css';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const Navigation = () => {
    return (
        <header id="header" className="sticky-top"> 
          {/* Navbar */}
          <nav className="primary-menu navbar navbar-expand-lg bg-dark navbar-text-light border-bottom-0">
            <div className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2"> 
              {/* Logo */} 
              <a href="index.html" className="mb-lg-auto mt-lg-4">
                <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block">
                  <img className="img-fluid rounded-pill d-block" src="images/profile.jpg" title="I'm Simone" alt="" />
                </span>
                <h1 className="text-5 text-white text-center mb-0 d-lg-block">Mostofa kamal</h1>
              </a> 
              {/* Logo End */}
              
              <div id="header-nav" className="collapse navbar-collapse">
                <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
                  <li className="nav-item"><a className="nav-link smooth-scroll active" href="#home">Home</a></li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#about">About Me</a></li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#services">What I Do</a></li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#resume">Resume</a></li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#portfolio">Portfolio</a></li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#testimonial">Testimonial</a></li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#contact">Contact</a></li>
                </ul>
              </div>
              <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
                <li className="social-icons-facebook"><a  title="Facebook" href="https://www.facebook.com/mostofakamalpassa" target="_blank"><FaFacebook className='display-6'></FaFacebook></a></li>
                <li className="social-icons-twitter"><a  title="Github" href="https://github.com/mkpbd" target="_blank"><FaGithub className='display-6 mx-4'></FaGithub></a></li>
                <li className="social-icons-twitter"><a  title="LinkedIn" href="https://www.linkedin.com/in/mostofa-kamal-6605841b2/" target="_blank"><FaLinkedin className='display-6 mx-5'></FaLinkedin></a></li>
             
              </ul>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"><span /><span /><span /></button>
          
          </nav>
          {/* Navbar End */} 
        </header>
       
      );
};

export default Navigation;