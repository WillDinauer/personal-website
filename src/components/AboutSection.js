import React from 'react';
import './AboutSection.css';
import '../App.css';

function AboutSection() {
  return (
    <div id='about' className='about-container'>
      <h1>About Me</h1>
      <div className='about-overview'>
        <div className='about-img-container'>
          <p>img here</p>
        </div>
        <div className='about-text-container'>
          <p>Hi! My name is Will and I'm a Computer Science Major and Engineering Sciences Minor at Dartmouth College. 
            I'm passionate about building technology that makes our lives more efficient and interesting.
            <br/>
            <br/>
            I serve as the Captain of the Dartmouth College Fencing Club (DCFC) and as the Vice President of CoderDojo, 
            an organization that teaches computer science concepts to local underprivileged high schools. 
            Through my involvement with these organizations, I've developed strong leadership and communication skills, 
            as well as a deep understanding of the importance of teamwork and collaboration. I'm eager to apply these 
            skills and my technical expertise to build innovative solutions that make a real difference in people's 
            lives.
          </p>
        </div>
      </div>
    </div>
  )
}


export default AboutSection