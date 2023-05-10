import React from 'react';
import '../assets/styles/FirstSection.css';
import firstSection__Image from '../assets/images/firstSectionImg.jpg';
import leftArrow from '../assets/images/leftArrow.png';
import rightArrow from '../assets/images/rightArrow.png';
import { NavLink } from 'react-router-dom';

export default function FirstSection() {
  return (
    <section className='firstSection'>
      <img src={firstSection__Image} alt='' />
      <div className='firsSection__floating__container'>
        <div className='switch__ImageIcons'>
          <div className='slider'>
            <img src={leftArrow} alt='prev slide' />
          </div>
          <div className='slider'>
            <img src={rightArrow} alt='next slide' />
          </div>
        </div>
        <div className='switch__ImageInfo'>
          <span>committed to providing satisfaction</span>
          <p className='Image__title'>Design</p>
          <p className='imageDescription'>
            The vision of Codenix Engineering Consultancy Pvt. Ltd. is <br />{' '}
            “To provide international standard sustainable engineering services
            in Nepal at an affordable rate.”
          </p>
          <NavLink to='house-plans'>
            <button className='explore'>
              <p>explore</p>
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
