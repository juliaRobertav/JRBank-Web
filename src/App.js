import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/home';
import AboutUs from './components/About/about';
import AboutService from './components/AboutServices/about_services';
import Clientes from './components/Clientes/clientes';
import Header from './components/Header/header';
import Service from './components/ServicesPage/services';
import Cadastro from './components/Cadastro/cadastro';
import Login from './components/Login/login';
import Saldo from './components/Saldo/saldo';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Header é fixo*/}
        <Routes>
          {/* Rotas para outras paginas*/}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about-service" element={<AboutService />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/saldo" element={<Saldo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
