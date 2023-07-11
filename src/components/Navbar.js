import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Button } from './Button';
import Resume from '../files/WilliamDinauer_Resume.pdf'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const menuClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  const scrollToSection = (id_name) => {
    const navbarHeight = parseInt(getComputedStyle(document.querySelector('.navbar')).height);
    const section = document.getElementById(id_name);

    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  var Logo = require("../images/WD_alt.png")

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={Logo} alt="logo"/>
          </Link>
        </div>
        <div className='menu-icon' onClick={menuClick}>
          <FontAwesomeIcon 
            icon={click ? faTimes : faBars} 
            className={click ? 'fa-times' : 'fa-bars'}
          />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink 
              to='/#home' 
              className='nav-links'
              activeClassName='nav-links active'
              onClick={() => {closeMobileMenu(); scrollToSection('home')}}
            >
              HOME
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              to='/#about' 
              className='nav-links' 
              activeClassName='nav-links active'
              onClick={() => {closeMobileMenu(); scrollToSection('about')}}
            >
              ABOUT
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              to='/#skills'
              className='nav-links' 
              activeClassName='nav-links active'
              onClick={() => {closeMobileMenu(); scrollToSection('skills')}}
            >
              SKILLS
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
                to='/#projects' 
                className='nav-links' 
                activeClassName='nav-links active'
                onClick={() => {closeMobileMenu(); scrollToSection('projects')}}
              >
                PROJECTS
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
                to='/#contact'
                className='nav-links'
                activeClassName='nav-links active'
                onClick={() => {closeMobileMenu(); scrollToSection('contact')}}
              >
                CONTACT
            </NavLink>
          </li>
          <li className='nav-item'>
            <a className='nav-links-mobile' href={Resume} onClick={closeMobileMenu}>RESUME</a>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline' link={Resume}>RESUME</Button>}
      </nav>
    </>
  )
}

export default Navbar