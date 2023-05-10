import React from 'react';
import '../assets/styles/SecondSection.css';
import secondSectionImg from '../assets/images/secondSectionImg.jpg';
import { NavLink } from 'react-router-dom';

export default function SecondSection() {
  return (
    <section className='secondSection'>
      <figure>
        <img src={secondSectionImg} alt='' className='largeImg' />
      </figure>
      <div className='quality__description'>
        <div className='image__title'>
          <p>Providing quality service Since 2020.</p>
        </div>
        <div className='image_description'>
          <p>
            Committed to providing engineering, construction, software, IT along
            with media related services with quality since 2020. "To provide
            international standard sustainable engineering services in Nepal at
            an affordable rate."
          </p>
        </div>
        <NavLink to='portfolio'>
          <button className='explore'>
            <p>explore</p>
          </button>
        </NavLink>
      </div>
    </section>
  );
}
