import React, { Component } from 'react';
import HeaderPage from '../components/headerPage';
import Footer from '../components/footer';
import Projects from '../components/projects';
import MCL1 from '../images/MCL1.png';
import MCL2 from '../images/MCL2.png';
import MCL3 from '../images/MCL3.png';
import MCL4 from '../images/MCL4.png';
import MCL5 from '../images/MCL5.png';

class MovieCardLibrary extends Component {
  render () {
    return (
      <div>
        <HeaderPage/>
        <div className="container-page">
          <h1>Projeto Movie Card Library</h1>
          <p>Um CRUD com cartões de filmes. Abaixo temos as imagens de como fica a aplicação na tela do computador e em mobile.</p>
          <a href="https://github.com/NandaTMarques/projeto-movie-card-library-crud"
            className="button">Repositório no GitHub</a>
          <div className="container-images">
            <img src={MCL4} alt="" className="image-page"/>
            <img src={MCL5} alt="" className="image-page"/>
          </div>
          <div className="container-images-mobile">
            <img src={MCL1} alt="" className="image-page-mobile"/>
            <img src={MCL2} alt="" className="image-page-mobile"/>
            <img src={MCL3} alt="" className="image-page-mobile"/>
          </div>
          <div className="page-text">
            <p>Criei um CRUD de cartões de filmes em React. A sigla CRUD significa, Create, Read, Update and Delete, então é possível realizar as seguintes operações nesse projeto:
            </p>
              <li>Adicionar um novo filme à lista - CREATE;</li>
              <li>Listar todos os filmes cadastrados, com uma página de informações resumidas sobre cada filme e uma página de informações detalhadas de um filme selecionado - READ;</li>
              <li>Editar um filme da lista - UPDATE;</li>
              <li>E apagar um filme da lista - DELETE.</li>
          </div>
        </div>
        <Projects/>
        <Footer/>
      </div>
    )
  }
}

export default MovieCardLibrary;