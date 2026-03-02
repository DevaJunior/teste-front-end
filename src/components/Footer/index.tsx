import React from 'react';
import './styles.scss';

import FacebookIcon from '../../assets/facebook.png';
import InstagramIcon from '../../assets/instagram.png';
import LinkedinIcon from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* NEWSLETTER */}
      <div className="footer__newsletter">
        <div className="container footer__newsletter-content">
          <div className="footer__newsletter-text">
            <h2>Inscreva-se na nossa newsletter</h2>
            <p>Assine nossa newsletter e receba novidades e promoções exclusivas da Econverse</p>
          </div>

          <div className='footer__newsletter-line'></div>
          
          <div className="footer__newsletter-form-wrapper">
            <form className="footer__newsletter-form" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Digite seu nome" required />
              <input type="email" placeholder="Digite seu e-mail" required />
              <button type="submit">INSCREVER</button>
            </form>
            <div className="footer__newsletter-checkbox">
              <input type="checkbox" id="termos" required />
              <label htmlFor="termos">Aceito os termos e condições</label>
            </div>
          </div>
        </div>
      </div>

      {/* LINKS E INSTITUCIONAL */}
      <div className="footer__main">
        <div className="container footer__main-content">
          <div className="footer__about">
            <img src={Logo} alt="Econverse" className="footer__logo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="footer__socials">
              <a href="#"><img src={InstagramIcon} alt="Instagram" /></a>
              <a href="#"><img src={FacebookIcon} alt="Facebook" /></a>
              <a href="#"><img src={LinkedinIcon} alt="Linkedin" /></a>
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h4>Institucional</h4>
              <ul>
                <li><a href="#">Sobre Nós</a></li>
                <li><a href="#">Movimento</a></li>
                <li><a href="#">Trabalhe conosco</a></li>
              </ul>
            </div>
            <div className="footer__column">
              <h4>Ajuda</h4>
              <ul>
                <li><a href="#">Suporte</a></li>
                <li><a href="#">Fale Conosco</a></li>
                <li><a href="#">Perguntas Frequentes</a></li>
              </ul>
            </div>
            <div className="footer__column">
              <h4>Termos</h4>
              <ul>
                <li><a href="#">Termos e Condições</a></li>
                <li><a href="#">Política de Privacidade</a></li>
                <li><a href="#">Troca e Devolução</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* RODAPÉ (COPYRIGHT) */}
      <div className="footer__bottom">
        <div className="container">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;