import React from 'react';
import HeaderSection from '../components/HeaderSection';
import '../App.css';
import AboutSection from '../components/AboutSection';
import SkillSection from '../components/SkillSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';

function Home() {
  return (
    <>
      <HeaderSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default Home