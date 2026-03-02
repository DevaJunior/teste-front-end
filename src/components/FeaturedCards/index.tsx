import React from 'react';
import './styles.scss';
import banner01 from '../../assets/banner_01.png';

const FeaturedCards: React.FC = () => {
  return (
    <section className="featured-cards container">
      <div className="featured-card" style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${banner01})`
      }}>
        <div className="featured-card__content">
          <h3>Parceiros</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button>CONFIRA</button>
        </div>
      </div>
      <div className="featured-card" style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${banner01})`
      }}>
        <div className="featured-card__content">
          <h3>Parceiros</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button>CONFIRA</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;