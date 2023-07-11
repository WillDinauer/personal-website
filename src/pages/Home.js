import React from 'react';
import HeaderSection from '../components/HeaderSection';
import '../App.css';
import AboutSection from '../components/AboutSection';
import SkillSection from '../components/SkillSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();

  useEffect(() => {
    const section = location?.hash.substring(1);
    if (section) {
      jumpToSection(section);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.pathname]);

  const jumpToSection = (id_name) => {
    const navbarHeight = parseInt(getComputedStyle(document.querySelector('.navbar')).height);
    const section = document.getElementById(id_name);

    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'auto'
      });
    }
  };

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