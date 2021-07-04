import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Projects from '../components/projects';
import wallet1 from '../images/wallet1.png';
import wallet2 from '../images/wallet2.png';

class Wallet extends Component {
  render () {
    return (
      <div>
        <Header/>
        <div className="container-page">
          <h1>Projeto Wallet</h1>
          <p>Uma carteira de controle de gastos com conversor de moedas.</p>
          <div className="container-images">
            <img src={wallet1} alt="" className="image-page"/>
            <img src={wallet2} alt="" className="image-page"/>
          </div>
          <div className="page-text">
            <p>Foi desenvolvida uma carteira de controle de gastos com conversor de moedas, ao utilizar essa aplicação um usuário deverá ser capaz de:
            </p>
              <li>Adicionar, remover e editar um gasto;</li>
              <li>Visualizar uma tabelas com seus gastos;</li>
              <li>Visualizar o total de gastos convertidos para uma moeda de escolha;</li>
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

export default Wallet;