import React from 'react'
import './SkillSection.css';
import '../App.css';

function SkillSection() {
  return (
    <div id='skills' className='skill-container'>
      <div className='skill-content'>
        <h3 className='section-title'>Languages</h3>
        <div className='skill-box'>
          <span>Java</span>
          <span>Python</span>
          <span>C/C++</span>
          <span>C#</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>React</span>
          <span>SQL</span>
          <span>Bash</span>
        </div>
      </div>
      <div className='skill-content'>
        <h3 className='section-title'>Other Skills</h3>
        <div className='skill-box'>
          <span>MongoDB</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>React-Native</span>
          <span>Expo</span>
          <span>Makefiles</span>
        </div>
      </div>
      <div className='skill-content'>
        <h3 className='section-title'>General</h3>
        <div className='skill-box'>
          <span>Full-Stack Development</span>
          <span>Algorithm Design</span>
          <span>Object-Oriented Programming</span>
          <span>Machine Learning</span>
          <span>Artificial Intelligence</span>
          <span>Unity Development</span>
          <span>Computer Architecture</span>
          <span>Compilers</span>
          <span>Mobile Development</span>
        </div>
      </div>
      <div className='skill-content'>
        <h3 className='section-title'>Tools</h3>
        <div className='skill-box'>
          <span>Git</span>
          <span>Unix</span>
          <span>Docker</span>
          <span>Jupyter Notebook</span>
          <span>Unity</span>
          <span>VS Code</span>
          <span>Figma</span>
        </div>
      </div>
    </div>
  )
}

export default SkillSection