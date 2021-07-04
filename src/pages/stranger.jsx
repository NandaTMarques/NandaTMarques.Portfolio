import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Projects from '../components/projects';
import stranger1 from '../images/stranger1.png';
import stranger2 from '../images/stranger2.png';
import stranger3 from '../images/stranger3.png';
import stranger4 from '../images/stranger4.png';

class StrangeThings extends Component {
  render () {
    return (
      <div>
        <Header/>
        <div className="container-page">
          <h1>Projeto Deploy Stranger Things</h1>
          <p className="page-texts">Nesta aplicação fiz o deploy das APIs e do site. Nele podemos pesquisar o nome do personagem da série "Stranger Things" e sabermos infomrações sobre eles, como nome e origem, ao clicarmos no botão mudar realidade a pesquisa aparecerá com as letras invertidas.</p>
          <div className="container-images">
            <img src={stranger1} alt="" className="image-page"/>
            <img src={stranger2} alt="" className="image-page"/>
          </div>
          <div className="container-images-mobile">
            <img src={stranger3} alt="" className="image-page-mobile"/>
            <img src={stranger4} alt="" className="image-page-mobile"/>
          </div>
          <div className="page-text">
            <p>Eu adaptei e configurei os projetos de front-end e back-end para que fosse feito o deploy deles. Coloquei os projetos no ar com o Heroku, utilizando o PM2 para gerenciar e monitorar os processos. Abaixo temos imagens das APIs também.</p>
            <h3>Neste projeto fui capaz de:</h3>
              <li>Publicar aplicações através do Heroku;</li>
              <li>Visualizar logs das suas aplicações publicadas;</li>
              <li>Monitorar suas aplicações publicadas;</li>
              <li>Utilizar variáveis de ambiente dentro do Heroku;</li>
              <li>Instalar, utilizar e aproveitar os principais recursos do PM2;</li>
              <li>Fazer deploy no Heroku aproveitando recursos de um process manager.</li>
          </div>
        </div>
        <Projects/>
        <Footer/>
      </div>
    )
  }
}

export default StrangeThings;
