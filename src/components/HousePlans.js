import React, { useEffect, useState } from 'react';
import predesigned from '../assets/images/Anioch-Plan.jpg';
import sketch from '../assets/images/Sketch.jpg';
import gettingStarted from '../assets/images/Getting-Started.jpg';
import '../assets/styles/HousePlans.css';
import { NavLink } from 'react-router-dom';

export default function HousePlans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const getplans = async () => {
      const response = await fetch(
        'https://impossible-slug-wig.cyclic.app/api/house'
      );
      setPlans(await response.json());
    };
    getplans();
  }, []);

  const planCards = [
    {
      imgSrc: predesigned,
      planTitle: 'Our Predesigned Plans',
      planDesc: 'Through the years of building and drawing homes ',
    },
    {
      imgSrc: sketch,
      planTitle: 'Our Predesigned Plans',
      planDesc: 'we have many plans available to choose from',
    },
    {
      imgSrc: gettingStarted,
      planTitle: 'Our Predesigned Plans',
      planDesc: 'or help inspire your own plans',
    },
  ];

  return (
    <div className='housePlans'>
      <div className='plan__types'>
        {planCards.map((cards, id) => {
          return (
            <figure className='planImg' key={id}>
              <img src={cards.imgSrc} alt='Predesigned Plan' loading='lazy' />
              <h4>{cards.planTitle} </h4>
              <p>{cards.planDesc}</p>
            </figure>
          );
        })}
        {/* 
                    <p>
                        Through the years of building and drawing homes, we have
                        many plans available to choose from or help inspire your
                        own plans
                    </p>
                
                    <p>
                        Our team can sit down, draw, and build your dream. We
                        have the training and experience to draw your plan at
                        Infrarch.
                    </p>
               
                    <p>
                        Infrarch has a draftsman and designer who can draw
                        and design what you are looking for. Call us to schedule
                        a time and get started.
                    </p>
                */}
      </div>
      <div className='middle__content'>
        <NavLink to='/contact'>
          <button className='explore'>
            <p>Build Your Dreams Today</p>
          </button>
        </NavLink>
        <p>Some Masterplan and 3D Photographs</p>
      </div>
      <div className='house__planList'>
        {plans.map((plan, plan_id) => {
          return (
            <div className='house__plan' id='plan_id'>
              <figure className='house__planImg'>
                <img src={plan.designImg} alt='House Plan Img' loading='lazy' />
              </figure>
              <p>{plan.designTitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
