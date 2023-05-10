import React from 'react';
import '../assets/styles/ImageCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageCard = ({ p_id, displayImg, displayTitle, displayDate }) => {
  return (
    <div className='imageCard'>
      <figure className='portfolio__img'>
        <LazyLoadImage
          className='lazyLoad'
          src={displayImg}
          placeholderSrc={displayImg}
          effect='black-and-white'
          width='100%'
          height='100%'
        />
      </figure>
      <div className='imageDetails'>
        <div className='imageDetail'>
          <p className='portfolio__title'>{displayTitle}</p>
          <p className='portfolio__date'>{displayDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
