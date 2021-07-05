import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Projects extends Component {
  render () {
    return (
      <section id="projects">
        <div className="container">
          <div className="title-group">
            <a id="portfolio-anchor" className="anchor"></a>
            <h2>Projetos</h2>
            <p>Esses são os principais projetos que desenvolvi até o momento. Mas você pode encontrar muito mais no <a
                href="https://github.com/NandaTMarques" id="profile-link" className="button">meu GitHub</a>!</p>
          </div>
          <div className="project-grid">
            <div className="project-tile movie-card">
              <h3>Projeto Movie Card Library CRUD</h3>
              <p>Um CRUD de cartões de filmes em React. </p>
              <div>
                <Link to="/movie-card" className="button">Visualizar</Link>
                <a href="https://github.com/NandaTMarques/projeto-movie-card-library-crud"
                  className="button">Repositório</a>
              </div>
            </div>
            <div className="project-tile wallet">
              <h3>Projeto Wallet</h3>
              <p>Uma carteira de controle de gastos com conversor de moedas. </p>
              <div>
                <Link to="/wallet" className="button">Visualizar</Link>
                <a href="https://github.com/NandaTMarques/Wallet"
                  className="button">Repositório</a>
              </div>
            </div>
            <div className="project-tile recipes">
              <h3>Projeto Recipes</h3>
              <p>Foi desenvolvido um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API! </p>
              <div>
                <Link to="/recipes" className="button">Visualizar</Link>
                <a href="https://github.com/NandaTMarques/Project-Recipes-App"
                  className="button">Repositório</a>
              </div>
            </div>
            <div className="project-tile star-wars">
              <h3>Projeto Star Wars</h3>
              <p>Uma lista com filtros de planetas do universo de Star Wars usando Context API e Hooks para controlar os estados globais. </p>
              <div>
                <Link to="/star-wars" className="button">Visualizar</Link>
                <a href="https://github.com/NandaTMarques/Project-Starwars-planets-search"
                  className="button">Repositório</a>
              </div>
            </div>
            <div className="project-tile stranger">
              <h3>Projeto Stranger Things Deploy</h3>
              <p>Fiz o deploy da API e do front-end no Heroku aproveitando recursos de um process manager. </p>
              <div>
                <Link to="/stranger-things" className="button">Visualizar</Link>
                <a href="http://nandatmarques-bd.herokuapp.com/"
                  className="button">API invertida</a>
                <a href="http://nandatmarques-pd.herokuapp.com/"
                  className="button">Site</a>
              </div>
            </div>
            <div className="project-tile makeup">
              <h3>Projeto Makeup Shop</h3>
              <p>E-commerce de maquiagens usando a API do Mercado Livre. Ainda está em construção...</p>
              <div>
                <Link to="/makeup-shop" className="button">Visualizar</Link>
                <a href="https://github.com/NandaTMarques/Project-MakeupShop"
                  className="button">Repositório</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Projects;