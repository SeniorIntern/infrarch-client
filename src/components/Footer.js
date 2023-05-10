import React from 'react';
import '../assets/styles/Footer.css';
import footImg from '../assets/images/infrarch.png';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__options'>
        <div className='footer__column'>
          <NavLink style={{ textDecoration: 'none' }}>
            <figure className='footer__Img'>
              <img src={footImg} alt='infrarch' />
            </figure>
          </NavLink>
        </div>
        <div className='footer__column'>
          <div className='footer__detail detail'>
            <b>
              <strong>office:</strong>
            </b>
            <p>PHONE: 980-30790393920 Near-Bhatbhateni, Hanumanthan</p>
          </div>
          <div className='footer__detail detail'>
            <p>
              <strong>Pramod Bhandari:</strong>
            </p>
            <p>CELL: +977 9803213210</p>
            <p>EMAIL: pramidbhandari@infrarch.com</p>
          </div>

          <div className='footer__detail detail'>
            <p>
              <strong>Pramod Bhandari:</strong>
            </p>
            <p>CELL: +977 9803213210</p>
            <p>EMAIL: pramidbhandari@infrarch.com</p>
          </div>
        </div>
        <div className='footer__column'>
          <ul className='footer__quickLinks'>
            <li>HOME</li>
            <li>OUR TEAM</li>
            <li>DESIGN</li>
            <li>RESIDENTIAL</li>
            <li>BUILD</li>
            <li>COMMERCIAL BUILD</li>
          </ul>
        </div>
        <div className='footer__column'>
          <ul className='footer__quickLinks'>
            <li>RESIDENTIAL DEVELOPMENT</li>
            <li>COMMERCIAL DEVELOPMENT</li>
            <li>RENTAL SPACE</li>
            <li>PORTFOLIO </li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </div>
      <div className='footer__copyright'>
        <p>© 2020-2023 INFRARCH, INC., ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}
