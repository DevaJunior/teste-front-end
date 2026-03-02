import React, { useState } from 'react';
import './styles.scss';

interface ModalProps {
  product: {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
  };
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-content">
          <div className="modal-image">
            <img src={product.photo} alt={product.productName} />
          </div>
          <div className="modal-details">
            <h2>{product.productName}</h2>
            <p className="modal-price">R$ {product.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</p>
            <p className="modal-desc">Many desktop publishing packages and web page editors now many desktop publishing</p>
            <a href="#">Veja mais detalhes do produto &gt;</a>
            
            <div className="modal-actions">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
                <span>{String(quantity).padStart(2, '0')}</span>
                <button onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>
              <button className="modal-buy">COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;