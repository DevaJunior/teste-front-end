import React from 'react';
import './styles.scss';

import Logo from '../../assets/logo.png'; 

const Brands: React.FC = () => {
  return (
    <section className="brands">
      <h2 className="brands__title">Navegue por marcas</h2>
      
      <div className="brands__carousel">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="brands__item">
            <img src={Logo} alt="Marca Parceira" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;