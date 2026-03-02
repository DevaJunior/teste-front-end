import React from 'react';
import './styles.scss';

import banner00 from '../../assets/banner_00.png';

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="banner__overlay" style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${banner00})`
      }}>
        <div className="banner__container container">
          <div className="banner__content">
            <h1>Venha conhecer nossas <br /> promoções</h1>
            <p>50% Off em todo o site</p>
            <button>Ver produto</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;