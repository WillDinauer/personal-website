import React from 'react';
import HeaderSection from '../components/HeaderSection';
import '../App.css';
import AboutSection from '../components/AboutSection';
import SkillSection from '../components/SkillSection';
import ProjectSection from '../components/ProjectSection';

function Home() {
  return (
    <>
      <HeaderSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
    </>
  );
}

export default Home