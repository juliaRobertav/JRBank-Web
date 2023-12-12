import React, { useState } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cadastro from '../Cadastro/cadastro';

/* estilização dos componentes 
  No styled Components, é feita a estilização além de ser definido o tipo (body por exemplo)*/
const HeaderContainer = styled.header`
  background-color: #800040;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Adicionado para corrigir o problema do botão desaparecido */
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  li {
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 20px;
    }
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 18px;
  }

  /* Estilos para telas menores */
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 70px;
    left: 0;
    background-color: #800040;
    width: 100%;
    padding: 10px;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    z-index: 1; /* Adicionado para garantir que o menu hambúrguer sobreponha outros elementos */

    li {
      margin-right: 0;
      text-align: center;
    }
  }
`;

const LoginButton = styled.button`
  background: #000;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  position: absolute;
  bottom: 20px;
  right: 20px;

  @media screen and (max-width: 767px) {
    position: relative;
    bottom: 0;
    right: 0;
    margin-top: 10px;
  }
`;

// menu hamburguer para responsividade
const HamburgerIcon = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    cursor: pointer;
  }
`;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    //Componentes
    <HeaderContainer>
      <div>
        <HamburgerIcon onClick={toggleMenu}>
          ☰
        </HamburgerIcon>
        <Navigation isOpen={isMenuOpen}>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/about">Sobre Nós</Link></li>
            <li><Link to="/clientes">Feedbacks</Link></li>
            <li><Link to="/services">Serviços</Link></li>
            <li><Link to="/about-service">Saiba Mais</Link></li>
          </ul>
      </Navigation>
      </div>
      <Link to='/login'> <LoginButton> Entrar </LoginButton> </Link>
  
    </HeaderContainer>
  );
};

export default Header;
