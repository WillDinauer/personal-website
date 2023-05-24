import React from 'react';
import HeaderSection from '../components/HeaderSection';
import '../App.css';
import AboutSection from '../components/AboutSection';
import SkillSection from '../components/SkillSection';

function Home() {
  return (
    <>
      <HeaderSection />
      <AboutSection />
      <SkillSection />
    </>
  );
}

export default Home