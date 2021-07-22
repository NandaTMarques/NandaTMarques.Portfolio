import React, { Component } from 'react';
import HeaderPage from '../components/headerPage';
import Footer from '../components/footer';
import Projects from '../components/projects';
import recipes2 from '../images/recipes2.png';
import recipes3 from '../images/recipes3.png';
import recipes4 from '../images/recipes4.png';
import recipes5 from '../images/recipes5.png';
import recipes6 from '../images/recipes6.png';
import recipes7 from '../images/recipes7.png';
import recipes8 from '../images/recipes8.png';
import recipes9 from '../images/recipes9.png';
import recipes10 from '../images/recipes10.png';

class Recipes extends Component {
  render () {
    return (
      <div>
        <HeaderPage/>
        <div className="container-page">
          <h1>Projeto Recipes</h1>
          <p className="page-texts">Esse foi um projeto desenvolvido em equipe. Desenvolvemos um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API!</p>
          <p>Nela é possível ver, buscar, filtrar, favoritar e acompanhar o processo de preparação de receitas e drinks!</p>
          <p>A base de dados serão 2 APIs distintas, uma para comidas e outra para bebidas.</p>
          <p>O layout tem como foco dispositivos móveis, então todos os protótipos vão estar desenvolvidos em telas menores.</p>
          <a href="https://github.com/NandaTMarques/Project-Recipes-App"
            className="button">Repositório no GitHub</a>
          <div className="container-images-mobile">
            <img src={recipes2} alt="" className="image-page-mobile"/>
            <img src={recipes3} alt="" className="image-page-mobile"/>
            <img src={recipes4} alt="" className="image-page-mobile"/>
            <img src={recipes5} alt="" className="image-page-mobile"/>
            <img src={recipes6} alt="" className="image-page-mobile"/>
            <img src={recipes7} alt="" className="image-page-mobile"/>
            <img src={recipes8} alt="" className="image-page-mobile"/>
            <img src={recipes9} alt="" className="image-page-mobile"/>
            <img src={recipes10} alt="" className="image-page-mobile"/>
          </div>
          <div className="page-text">
            <h3>Neste projeto:</h3>
              <li>Utilizamos a Context API do React para gerenciar estado</li>
              <li>Utilizamos o React Hook useState</li>
              <li>Utilizamos o React Hook useContext</li>
              <li>Utilizamos o React Hook useEffect</li>
              <li>Criamos Hooks customizados</li>
          </div>
        </div>
        <Projects/>
        <Footer/>
      </div>
    )
  }
}

export default Recipes;