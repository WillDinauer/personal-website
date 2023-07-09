import React from 'react'
import './ContactSection.css';
import '../App.css';
import Connect from './Connect';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function ContactSection() {
  return (
    <div id='contact' className="contact-container">
      <h1 className='contact-header'>Contact Me</h1>
      <div className='contact-list-container'>
        <ul className='contact-list'>
          <Connect icon={faEnvelope} label='Email' description='william.dinauer@gmail.com' link='mailto:william.dinauer@gmail.com' linkText="Email me ➜"/>
          <Connect icon={faLinkedin} label='LinkedIn' description='Will Dinauer' link='https://www.linkedin.com/in/william-dinauer-86a609199/' linkText="Connect with me ➜"/>
          <Connect icon={faGithub} label='GitHub' description='WillDinauer' link='https://github.com/WillDinauer/' linkText="View my projects ➜"/>
        </ul>
      </div>
    </div>
  )
}

export default ContactSection