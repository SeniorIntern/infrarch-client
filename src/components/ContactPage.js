import React from 'react';
import '../assets/styles/ContactPage.css';
import image from '../assets/images/contactPageImg.jpg';

export default function ContactPage() {
  return (
    <section className='contact '>
      <div className='contact__contents'>
        <div className='contact__skidmore'>
          <div className='image'>
            <img src={image} alt='' />
          </div>
          <div className='contact__details'>
            <h3 className='contact__Title'>Contact Infrarch.</h3>
            <div className='subDetails'>
              <p className='contactSubTitle'>Office: </p>
              <p className='contactDetails'>Phone: 980-3079039</p>
              <p className='contactDetails'>Near-Bhatbhateni, Hanumanthan</p>
            </div>
            <div className='subDetails'>
              <p className='contactSubTitle'>Pramod Bhandari:</p>
              <p className='contactDetails'>Cell: +977 9803213210</p>
              <p className='contactDetails'>Email:</p>
              <p className='contactDetails'>pramidbhandari@infrarch.com</p>
            </div>
            <div className='subDetails'>
              <p className='contactSubTitle'>Infrarch Engineering Services :</p>
              <p className='contactDetails'>Cell: 980-3079039</p>
              <p className='contactDetails'>
                Email: infrarchengineering@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className='contact__form'>
          <h3 className='contact__Title  space'>Contact Form</h3>
          <p className='contactForm__greet'>
            Please fill in the information below and one of our team members
            will get back to you as soon as possible.
          </p>
          <p className='contactForm__greet'>Thank you!</p>
          <section className='form'>
            <form action='' method='post'>
              <input type='text' id='firstName' placeholder='first name ...' />
              <input type='text' id='email' placeholder='email ...' />
              <input type='text' id='company' placeholder='company...' />
              <textarea
                name=''
                id=''
                cols='30'
                rows='15'
                placeholder='write a message...'
              ></textarea>
              <div className='button'>
                <button className='explore' type='submit'>
                  <p>SUBMIT</p>
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}
