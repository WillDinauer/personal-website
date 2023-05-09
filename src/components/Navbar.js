import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Button } from './Button';

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

  useEffect(() => {
    showButton();
  }, []);

  var Logo = require("../images/wd_logo.png")

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={Logo} alt="logo" height={80}/>
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
              to='/' 
              className='nav-links'
              activeClassName='nav-links active'
              onClick={closeMobileMenu}
            >
              HOME
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              to='/about' 
              className='nav-links' 
              activeClassName='nav-links active'
              onClick={closeMobileMenu}
            >
              ABOUT
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              to='/skills' 
              className='nav-links' 
              activeClassName='nav-links active'
              onClick={closeMobileMenu}
            >
              SKILLS
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
                to='/projects' 
                className='nav-links' 
                activeClassName='nav-links active'
                onClick={closeMobileMenu}
              >
                PROJECTS
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
                to='/contact' 
                className='nav-links' 
                activeClassName='nav-links active'
                onClick={closeMobileMenu}
              >
                CONTACT
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink 
              to='/resume' 
              className='nav-links-mobile' 
              onClick={closeMobileMenu}
            >
              RESUME
            </NavLink>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>RESUME</Button>}
      </nav>
    </>
  )
}

export default Navbar