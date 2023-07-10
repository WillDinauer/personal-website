import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function SE_Template(props) {
  const direction = props.img_left ? 'project-img_left' : 'project-img_right'; 

  return (
    <>
      <div className={`project ${direction}`}>
        <div className="project-image">
          <img src={require('../images/Cedar.png')} alt="Project" className="project-image" />
        </div>
        <div className="project-content">
          <div className="project-header">
            <div className="project-header-text">
              <h3 className='project-title'>Cedar Mobile App</h3>
              <p className='project-stack'>React Native, Express.js, MongoDB</p>
            </div>
            <div className="project-header-icons">
              {props.gitlink != null ? (
                <a href={props.gitlink} className="projects__item__external__link fa-stack fa-lg">
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
          <p className="project-text">Implemented and deployed a mobile app in a scrum environment over the course of 6 months in a team of 5.</p>
          <ul className='bullet-list'>
            <li className='bullet-item'>Led the design and development of a mobile app aimed at addressing sexual assault on college campuses, leveraging React Native, Expo, Node.js, and MongoDB.</li>
            <li className='bullet-item'>Implemented a RESTful API with web sockets using Express.js, facilitating real-time communication between the frontend and backend.</li>
            <li className='bullet-item'>Deployed the server using Render, ensuring a reliable and scalable infrastructure for user access.</li>
            <li className='bullet-item'>Structured the MongoDB database to support efficient and secure storage, enabling optimized NoSQL queries for retrieving and storing data.</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SE_Template