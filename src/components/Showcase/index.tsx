import React, { useRef, useState } from 'react';
import './styles.scss';
import Modal from '../Modal';

import produtosData from '../../data/produtos.json'; 

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const Showcase: React.FC = () => {
  const [products] = useState<Product[]>(produtosData.products);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className="showcase container">
        
        {/* Seta Esquerda */}
        <button className="showcase__arrow showcase__arrow--left" onClick={() => handleScroll('left')}>
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 15L1.5 8L8.5 1" stroke="#3F3F40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Trilha do Carrossel */}
        <div className="showcase__track" ref={carouselRef}>
          {products.map((product, index) => (
            <div key={index} className="product-card" onClick={() => setSelectedProduct(product)}>
              <img src={product.photo} alt={product.productName} className="product-card__image" />
              <p className="product-card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              
              <div className="product-card__price-box">
                <p className="product-card__old-price">R$ {(product.price * 1.2).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</p>
                <p className="product-card__price">R$ {product.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</p>
                <p className="product-card__installments">ou 2x de R$ {(product.price / 2).toLocaleString('pt-br', { minimumFractionDigits: 2 })} sem juros</p>
                <p className="product-card__shipping">Frete grátis</p>
              </div>
              
              <button className="product-card__button">COMPRAR</button>
            </div>
          ))}
        </div>

        {/* Seta Direita */}
        <button className="showcase__arrow showcase__arrow--right" onClick={() => handleScroll('right')}>
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1L8.5 8L1.5 15" stroke="#3F3F40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {selectedProduct && (
        <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
};

export default Showcase;