import React from 'react'
import './FooterSection.css';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function FooterSection() {
  return (
    <div className='footer-container'>
      <p className='name'>William Dinauer</p>
      <div className='logos-container'>
        <a href={'https://github.com/WillDinauer/'} className="projects__item__external__link fa-stack fa-lg">
          <FontAwesomeIcon color={'#1F65E1'} icon={faSquare} className="fa-stack-2x" />
          <FontAwesomeIcon color={'#ffffff'} icon={faGithub} className="fa-stack-1x fa-inverse fa-stack-align-center" />
        </a>
        <a href={'https://www.linkedin.com/in/william-dinauer-86a609199/'} className="projects__item__external__link fa-stack fa-lg">
          <FontAwesomeIcon color={'#1F65E1'} icon={faSquare} className="fa-stack-2x" />
          <FontAwesomeIcon color={'#ffffff'} icon={faLinkedin} className="fa-stack-1x fa-inverse fa-stack-align-center" />
        </a>
        <a href={"mailto:william.dinauer@gmail.com"} className="projects__item__external__link fa-stack fa-lg">
          <FontAwesomeIcon color={'#1F65E1'} icon={faSquare} className="fa-stack-2x" />
          <FontAwesomeIcon color={'#ffffff'} icon={faEnvelope} className="fa-stack-1x fa-inverse fa-stack-align-center" />
        </a>
      </div>
      <p className='endnote'>
        Designed & Developed by William Dinauer
        <br/>
        © William Dinauer 2023
      </p>
    </div>
  )
}

export default FooterSection