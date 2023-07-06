import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Project(props) {
  return (
    <>
      <li className="projects__item">
        <div className="projects__item__link">
          <figure className="projects__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Project" className="projects__item__img" />
          </figure>
          <div className='projects__item__info'>
            <h5 className="projects__item__text">{props.text}</h5>
            <div className="projects__item__buttons_container">
              <a href={props.link} className="projects__item__external__link fa-stack fa-lg">
                  <FontAwesomeIcon color={'#3c2acb'} icon={faCircle} className="fa-stack-2x" />
                  <FontAwesomeIcon color={'#ffffff'} icon={props.icon} className="fa-stack-1x fa-inverse fa-stack-align-center" />
              </a>
              <Link to="/projectdetails" className="projects__item__link-text">
                Details
                <p className="projects__item__link-arrow">
                  ➜
                </p>
              </Link>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default Project