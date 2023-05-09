import React from 'react';
import './HeaderSection.css';
import '../App.css';

function HeaderSection() {
  return (
    <div className='header-container'>
      <div className='row-container'>
        <div className='entry-container'>
          <h1>Hello! I'm <br/>William Dinauer</h1>
          <h2>I'm a Software Engineer studying Computer Science and Engineering at Dartmouth College</h2>
        </div>
        <div className='img-container'>
          <img src={require('../images/HeadShot.JPG')} alt="head" className='headshot-img'/>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection