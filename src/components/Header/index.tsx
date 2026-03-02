import React from 'react';
import './styles.scss';

import Logo from '../../assets/logo.png';
import ShieldCheck from '../../assets/ShieldCheck.png';
import Truck from '../../assets/truck.png';
import CreditCard from '../../assets/CreditCard.png';
import BoxIcon from '../../assets/box.png';
import HeartIcon from '../../assets/heart.png';
import UserIcon from '../../assets/user.png';
import CartIcon from '../../assets/cart.png';
import SearchIcon from '../../assets/search.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__top-bar">
        <div className="header__container container">
          <span><img src={ShieldCheck} alt="" /> Compra <strong>100% segura</strong></span>
          <span><img src={Truck} alt="" /> <strong>Frete grátis</strong> acima de R$ 200</span>
          <span><img src={CreditCard} alt="" /> <strong>Parcele</strong> suas compras</span>
        </div>
      </div>

      <div className="header__main">
        <div className="header__container container">
          <img src={Logo} alt="Econverse Logo" className="header__logo" />
          
          <div className="header__search">
            <input type="text" placeholder="O que você está buscando?" />
            <button className="header__search-btn">
              <img src={SearchIcon} alt="Buscar" />
            </button>
          </div>

          <div className="header__actions">
            <button><img src={BoxIcon} alt="Pedidos" /></button>
            <button><img src={HeartIcon} alt="Favoritos" /></button>
            <button><img src={UserIcon} alt="Minha Conta" /></button>
            <button><img src={CartIcon} alt="Carrinho" /></button>
          </div>
        </div>
      </div>

      <nav className="header__nav">
        <ul className="header__container container">
          <li><a href="#">TODAS CATEGORIAS</a></li>
          <li><a href="#">SUPERMERCADO</a></li>
          <li><a href="#">LIVROS</a></li>
          <li><a href="#">MODA</a></li>
          <li><a href="#">LANÇAMENTOS</a></li>
          <li><a href="#" className="active">OFERTAS DO DIA</a></li>
          <li><a href="#">ASSINATURA</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;