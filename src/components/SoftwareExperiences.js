import React from 'react';
import './SoftwareExperiences.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faLink } from '@fortawesome/free-solid-svg-icons';
import SoftwareExperience from './SoftwareExperience';

function SoftwareExperiences() {
  return (
    <div className='se-container'>
      <h1>Software Experiences</h1>
      <div className="project-container">
        <div className="project">
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
                <a href={"https://medium.com/dartmouth-cs98/how-can-a-mobile-app-help-combat-sexual-violence-on-college-campuses-meet-cedar-eb581d55d013"} className="projects__item__external__link fa-stack fa-lg">
                  <FontAwesomeIcon color={'#1F65E1'} icon={faCircle} className="fa-stack-2x" />
                  <FontAwesomeIcon color={'#ffffff'} icon={faLink} className="fa-stack-1x fa-inverse fa-stack-align-center" />
                </a>
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
        <SoftwareExperience 
          img={require('../images/Cedar.png')}
          title='Cedar Mobile App'
          stack='React Native, Express.js, MongoDB'
          link='https://medium.com/dartmouth-cs98/how-can-a-mobile-app-help-combat-sexual-violence-on-college-campuses-meet-cedar-eb581d55d013'
          projectDescription={
            <>
            <p className="project-text">Implemented and deployed a mobile app in a scrum environment over the course of 6 months in a team of 5.</p>
              <ul className='bullet-list'>
                <li className='bullet-item'>Led the design and development of a mobile app aimed at addressing sexual assault on college campuses, leveraging React Native, Expo, Node.js, and MongoDB.</li>
                <li className='bullet-item'>Implemented a RESTful API with web sockets using Express.js, facilitating real-time communication between the frontend and backend.</li>
                <li className='bullet-item'>Deployed the server using Render, ensuring a reliable and scalable infrastructure for user access.</li>
                <li className='bullet-item'>Structured the MongoDB database to support efficient and secure storage, enabling optimized NoSQL queries for retrieving and storing data.</li>
              </ul>
            </>
          }
          invert
        />
      </div>
      {/*<SoftwareExperience 
        img=''
        title=''
        stack=''
        gitLink=''
        link=''
        projectDescription=''
      />*/}
  </div>
  );
}

export default SoftwareExperiences