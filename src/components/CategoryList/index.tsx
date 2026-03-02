import React from 'react';
import './styles.scss';

import MonitorIcon from '../../assets/monitor.png';
import SupermercadoIcon from '../../assets/supermercados.png';
import BebidasIcon from '../../assets/whiskey.png';
import FerramentasIcon from '../../assets/ferramentas.png';
import EsportesIcon from '../../assets/corrida.png';
import SaúdeIcon from '../../assets/cuidados-de-saude.png';
import ModaIcon from '../../assets/moda.png';

const categories = [
  { name: 'Tecnologia', icon: MonitorIcon, active: true },
  { name: 'Supermercado', icon: SupermercadoIcon },
  { name: 'Bebidas', icon: BebidasIcon },
  { name: 'Ferramentas', icon: FerramentasIcon },
  { name: 'Saúde', icon: SaúdeIcon },
  { name: 'Esportes', icon: EsportesIcon },
  { name: 'Moda', icon: ModaIcon },
];

const CategoryList: React.FC = () => {
  return (
    <div className="category-list container">
      {categories.map((cat, index) => (
        <div key={index} className={`category-item ${cat.active ? 'active' : ''}`}>
          <div className="category-item__icon">
            <img src={cat.icon} alt={cat.name} />
          </div>
          <span>{cat.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;