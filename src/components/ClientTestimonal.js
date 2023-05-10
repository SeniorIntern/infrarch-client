import React, { useEffect, useState } from 'react';
import '../assets/styles/ClientTestimonal.css';

export default function ClientTestimonal() {
  const [clientTestimonalData, setclientTestimonalData] = useState([]);

  useEffect(() => {
    const getClientTestimonalData = async () => {
      const response = await fetch(`${process.env.API_URL}api/testimonal`);
      setclientTestimonalData(await response.json());
    };
    getClientTestimonalData();
  }, []);

  return (
    <section className='testimonals'>
      <p className='title'>Our clients say.</p>
      <div className='testimonalList'>
        {clientTestimonalData.map((testimonal, testimonal_id) => {
          return (
            <div className='testimonal' key={testimonal_id}>
              <p className='test_description'>{testimonal.testimonal_desc}</p>
              <p className='client'>By {testimonal.client_name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
