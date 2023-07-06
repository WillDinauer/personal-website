import React from 'react'
import Project from './Project'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './ProjectSection.css';

function ProjectSection() {
  return (
    <div id='projects' className='projects'>
      <h1>Projects</h1>
      <div className="projects__container">
        <div className="projects__wrapper">
          <ul className="projects__items">
            <Project 
              src={require('../images/Cedar.png')}
              text="Cedar Mobile App"
              label='React Native, Express.js. MongoDB'
              icon={faLink}
              link="https://medium.com/dartmouth-cs98/how-can-a-mobile-app-help-combat-sexual-violence-on-college-campuses-meet-cedar-eb581d55d013"
            />
            <Project 
              src={require('../images/TSE.png')}
              text="Tiny Search Engine"
              label='C, Makefiles, Unix'
              icon={faGithub}
              link="https://github.com/WillDinauer/Tiny-Search-Engine"
            />
          </ul>
          <ul className="projects__items">
            <Project 
              src={require('../images/x86_code_generator.PNG')}
              text="X86 Code Generator"
              label='C++'
              icon={faGithub}
              link="https://github.com/WillDinauer/x86-Code-Generation"
            />
            <Project 
              src={require('../images/HMM.PNG')}
              text="Part of Speech Recognizer"
              label='Java'
              icon={faGithub}
              link="https://github.com/WillDinauer/Part-of-Speech-Recognizer"
            />
            <Project 
              src={require('../images/SpaceWizardPhoto.JPG')}
              text="Space Wizards VR"
              label='Unity, C#'
              icon={faLink}
              link="https://youtu.be/DxJX_zAtysg"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection