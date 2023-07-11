import React, { useEffect } from 'react';
import SoftwareExperiences from '../components/SoftwareExperiences';
import FooterSection from '../components/FooterSection';

function ProjectDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <SoftwareExperiences />
      <FooterSection />
    </>
  );
}

export default ProjectDetails;