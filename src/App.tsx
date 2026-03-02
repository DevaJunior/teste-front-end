import React from 'react';
import './styles/global.scss';

import Header from './components/Header';
import Banner from './components/Banner';
import CategoryList from './components/CategoryList';
import Showcase from './components/Showcase';
import FeaturedCards from './components/FeaturedCards';
import Brands from './components/Brands';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
        <Banner />
        
        <div className="container">
          <CategoryList />
          
          <div className="section-title">
            <div className="line"></div>
            <h2>Produtos relacionados</h2>
            <div className="line"></div>
          </div>
          
          <nav className="product-tabs">
            <ul>
              <li className="active">CELULAR</li>
              <li>ACESSÓRIOS</li>
              <li>TABLETS</li>
              <li>NOTEBOOKS</li>
              <li>TVS</li>
              <li>VER TODOS</li>
            </ul>
          </nav>

          <Showcase />
          
          <FeaturedCards />

          <div className="section-title">
            <div className="line"></div>
            <h2>Produtos relacionados</h2>
            <div className="line"></div>
          </div>
          <a href="#" className="view-all">Ver todos</a>

          <Showcase />
          
          <FeaturedCards />
          
          <Brands />

          <div className="section-title">
            <div className="line"></div>
            <h2>Produtos relacionados</h2>
            <div className="line"></div>
          </div>
          <a href="#" className="view-all">Ver todos</a>

          <Showcase />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;