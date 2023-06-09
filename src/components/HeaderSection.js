import React from 'react';
import './HeaderSection.css';
import '../App.css';

function HeaderSection() {
  return (
    <div id='home' className='header-container'>
      <div className='row-container'>
        <div className='entry-container'>
          <h1 className='introduction'>Hello! I'm <br/>William Dinauer</h1>
          <h2>Software Engineer & Dartmouth College Graduate</h2>
        </div>
        <div className='img-container'>
          <img src={require('../images/HeadShot.JPG')} alt="head" className='headshot-img'/>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection