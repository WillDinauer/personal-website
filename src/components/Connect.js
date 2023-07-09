import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Connect(props) {
  return (
    <>
      <li className='contact-item'>
        <div className='contact-item-container'>
          <FontAwesomeIcon color={'#ffffff'} icon={props.icon} className='fa-2x'/>
          <p className='contact-item-label'>{props.label}</p>
          <p className='contact-item-description'>{props.description}</p>
          <a className='contact-item-link' href={props.link}>{props.linkText}</a>
        </div>
      </li>
    </>
  )
}

export default Connect