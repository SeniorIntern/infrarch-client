import React from 'react';
import upArrow from '../assets/images/upArrow.png';

export default function SocialMediaNav() {
  return (
    <div className='socialMediaNav'>
      <div className='socialMedia__links'>
        <p>fb</p>
        <p>ig</p>
        <p>rate</p>
      </div>
      <div className='goto__top'>
        <img src={upArrow} alt='quick top' />
      </div>
    </div>
  );
}
