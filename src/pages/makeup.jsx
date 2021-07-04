import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Projects from '../components/projects';
import makeup1 from '../images/makeup1.png';
import makeup2 from '../images/makeup2.png';

class MakeupShop extends Component {
  render () {
    return (
      <div>
        <Header/>
        <div className="container-page">
          <h1>Projeto Makeup Shop</h1>
          <h2>Em construção...</h2>
          <p>Uma loja de maquiagens utilizando uma API externa. Aqui temos o esboço de como ficará:</p>
          <div className="container-images">
            <img src={makeup1} alt="" className="image-page"/>
            <img src={makeup2} alt="" className="image-page"/>
          </div>
          <div className="page-text">
            <p>Nesse projeto eu farei um site de vendas de maquiagens consumindo dados diretamente de uma API!
            </p>
            <h3>Neste projeto:</h3>
              <li>Criamos um store Redux em aplicações React</li>
              <li>Criamos reducers no Redux em aplicações React</li>
              <li>Criamos actions no Redux em aplicações React</li>
              <li>Criamos dispatchers no Redux em aplicações React</li>
              <li>Conectamos Redux aos componentes React</li>
              <li>Criamos actions assíncronas na sua aplicação React que faz uso de Redux.</li>
          </div>
        </div>
        <Projects/>
        <Footer/>
      </div>
    )
  }
}

export default MakeupShop;