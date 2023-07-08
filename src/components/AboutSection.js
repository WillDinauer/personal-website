import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './AboutSection.css';
import '../App.css';

function AboutSection() {
  const config = {
    showThumbs: false, // Hide the small images below the carousel
    infiniteLoop: true, // Make the carousel loop around
    autoPlay: true, // Enable automatic scrolling
    interval: 4000, // Set the interval between slides (in milliseconds)
    stopOnHover: true, // Stop automatic scrolling on hover
  };

  return (
    <div id='about' className='about-container'>
      <h1>About Me</h1>
      <div className='about-overview'>
        <div className='about-img-container'>
          <Carousel {...config}>
            <div>
              <img src={require('../images/NY_pose.jpg')} alt="1" />
            </div>
            <div>
              <img src={require('../images/Nationals_22.jpg')} alt="2" />
            </div>
            <div>
              <img src={require('../images/CedarTeam.jpg')} alt="3" />
            </div>
          </Carousel>
        </div>
        <div className='about-text-container'>
          <p>Hi! My name is Will and I'm a software engineer. I graduated Magna Cum Laude from Dartmouth College with a degree in Computer Science and a minor in Engineering Sciences.
            I'm passionate about building technology that makes our lives more efficient and interesting.
            <br/>
            <br/>
            In college I served as the Captain of the Dartmouth College Fencing Club (DCFC) and as the Vice President of CoderDojo, 
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