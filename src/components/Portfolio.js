import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import '../assets/styles/Portfolio.css';

export default function Portfolio() {
  const [portfolioData, setportfolioData] = useState([]);

  useEffect(() => {
    const getPortfolioDetails = async () => {
      const response = await fetch(
        `https://impossible-slug-wig.cyclic.app/api/portfolio`
      );

      setportfolioData(await response.json());
    };
    getPortfolioDetails();
  }, []);

  return (
    <section className='portfolio'>
      <div className='portfolio__card'>
        {portfolioData.map((portfolio, p_id) => {
          return <ImageCard key={p_id} {...portfolio} />;
        })}
      </div>
    </section>
  );
}
