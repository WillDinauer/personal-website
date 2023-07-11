import React from 'react';
import './SoftwareExperiences.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function SoftwareExperience(props) {
  const direction = props.invert ? 'project-invert' : 'project-regular'; 

  return (
    <>
      <div className={`project ${direction}`}>
        <div className="project-image-container">
          <img src={props.img} alt="Project" className="project-image" />
        </div>
        <div className="project-content">
          <div className="project-header">
            <div className="project-header-text">
              <h3 className='project-title'>{props.title}</h3>
              <p className='project-stack'>{props.stack}</p>
            </div>
            <div className="project-header-icons">
              {props.gitLink != null ? (
                <a href={props.gitLink} className="projects__item__external__link fa-stack fa-lg">
                  <FontAwesomeIcon color={'#1F65E1'} icon={faCircle} className="fa-stack-2x" />
                  <FontAwesomeIcon color={'#ffffff'} icon={faGithub} className="fa-stack-1x fa-inverse fa-stack-align-center" />
                </a>) : null
              }
              {props.link != null ? (
                <a href={props.link} className="projects__item__external__link fa-stack fa-lg">
                  <FontAwesomeIcon color={'#1F65E1'} icon={faCircle} className="fa-stack-2x" />
                  <FontAwesomeIcon color={'#ffffff'} icon={faLink} className="fa-stack-1x fa-inverse fa-stack-align-center" />
                </a>) : null
              }
            </div>
          </div>
          {props.projectDescription}
        </div>
      </div>
    </>
  )
}

export default SoftwareExperience