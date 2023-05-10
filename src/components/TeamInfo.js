import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../assets/styles/TeamInfo.css';

export default function TeamInfo() {
  const [memberData, setmemberData] = useState([]);

  useEffect(() => {
    const getMemberData = async () => {
      const response = await fetch(
        'https://impossible-slug-wig.cyclic.app/api/member'
      );
      setmemberData(await response.json());
    };
    getMemberData();
  }, []);

  return (
    <div className='teamInfo marginLeftRight '>
      <div className='about__team'>
        <div className='about__title'>
          <p>Our expert team. Who we are</p>
        </div>
        <div className='about__desc'>
          <p>
            Codenix Engineering Consultancy is an engineering firm based in
            Kathmandu that was established in 2020 A.D. The location of this
            company is Thapagaun, Kathmandu-10. It has a total of 25 employees
            and is regarded as a medium-sized company. It has already catered to
            50+ private clients & more than 10+ government offices for
            consulting works and about 5 private construction works. It has
            plans to expand in its own building by 2025 and plans to employee
            50+ staffs
            <br />
            It is committed to providing engineering, construction, software, IT
            along with media related services. The team boasts of experienced
            professionals of relevant sector aiming to bring about a change in
            the future. The utmost satisfaction in its valued clients speaks
            volume of the great success it has had in the market in such short
            span since establishment.
          </p>
        </div>
      </div>
      <div className='team__info'>
        {memberData.map((member, member_id) => {
          return (
            <div className='member__info' key={member_id}>
              <LazyLoadImage
                className='teamImg'
                src={member.member_img}
                placeholderSrc={member.member_img}
                effect='black-and-white'
              />
              <p>{member.member_fullName}</p>
              <p>{member.member_role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
