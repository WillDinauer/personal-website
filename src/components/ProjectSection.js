import React from 'react'
import Project from './Project'
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
            />
            <Project 
              src={require('../images/TSE.png')}
              text="Tiny Search Engine"
              label='C, Makefiles, Unix'
            />
          </ul>
          <ul className="projects__items">
            <Project 
              src={require('../images/x86_code_generator.PNG')}
              text="X86 Code Generator"
              label='C++'
            />
            <Project 
              src={require('../images/HMM.PNG')}
              text="Part of Speech Recognizer"
              label='Java'
            />
            <Project 
              src={require('../images/SpaceWizardPhoto.JPG')}
              text="Space Wizards VR"
              label='Unity, C#'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection