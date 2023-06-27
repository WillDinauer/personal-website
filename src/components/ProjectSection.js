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
              label='React-Native'
            />
            <Project 
              src={require('../images/Cedar.png')}
              text="Cedar Mobile App"
              label='React-Native'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection