import React from 'react';
import '../assets/styles/HomeBody.css';
import ClientTestimonal from './ClientTestimonal';
import FirstSection from './FirstSection';
import ProjectShowcase from './ProjectShowcase';
import SecondSection from './SecondSection';

export default function HomeBody() {
  return (
    <main className='homebody'>
      <FirstSection />
      <SecondSection />
      <ClientTestimonal />
      <ProjectShowcase />
    </main>
  );
}
