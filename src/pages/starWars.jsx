import React, { Component } from 'react';
import HeaderPage from '../components/headerPage';
import Footer from '../components/footer';
import Projects from '../components/projects';
import starWars1 from '../images/SW1.png';
import starWars2 from '../images/SW2.png';

class StarWars extends Component {
  render () {
    return (
      <div>
        <HeaderPage/>
        <div className="container-page">
          <h1>Projeto Star Wars Planets</h1>
          <p>Desenvolvi uma lista com filtros de planetas do universo de Star Wars usando Context API e Hooks para controlar os estados globais.</p>
          <a href="https://github.com/NandaTMarques/Project-Starwars-planets-search"
                  className="button">Repositório no GitHub</a>
          <div className="container-images">
            <img src={starWars1} alt="" className="image-page"/>
            <img src={starWars2} alt="" className="image-page"/>
          </div>
          <div className="page-text">
            <p>Ao utilizar essa aplicação um usuário deverá ser capaz de:
            </p>
              <li>Visualizar todos os planetas;</li>
              <li>Filtrar os planetas;</li>
              <li>Retirar os filtros</li>
            <h3>Neste projeto:</h3>
              <li>Utilizar a Context API do React para gerenciar estado;</li>
              <li>Utilizar o React Hook useState;</li>
              <li>Utilizar o React Hook useContext;</li>
              <li>Utilizar o React Hook useEffect;</li>
              <li>Criar React Hooks customizados.</li>
          </div>
        </div>
        <Projects/>
        <Footer/>
      </div>
    )
  }
}

export default StarWars;