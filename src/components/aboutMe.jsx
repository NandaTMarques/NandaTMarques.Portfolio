import React, { Component } from 'react';
import eu from '../images/eu.jpg';
import github from '../images/gitHub.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';

class AboutMe extends Component {
  render() {
    return (
      <section id="stack" className="about-me-box">
        <a id="about-me-anchor" className="anchor"></a>
        <div className="container">
          <div className="title-group">
            <h2>Sobre mim</h2>
          </div>
          <div className="card-row about-me-card">
            <div className="about-me-container">
              <div className="card-img-me">
                <img src={eu} alt=""/>
              </div>
              <div className="text-aboutme">
                <p><strong>Eu sou capixaba</strong>, hoje moro no interior do estado de São Paulo, sou uma pessoa tranquila, gosto de conhecer pessoas e fazer novas amizades, amo internet, meus cachorros e minha gata. Nos meus momentos de descanso gosto de assistir séries, passar um tempo com meu marido e minhas filhas e de dar uma saidinha com as amigas. </p>
                <p>Embora seja graduada em Direito, estou cursando faculdade de <em>Engenharia de Software e sou aluna do curso de Desenvolvimento de Web na Trybe</em>.</p>
                <p>Ao longo de quase 10 anos advogando, desenvolvi muito a minha habilidade de trabalhar em equipe, minha comunicação, argumentação e pensamento crítico.</p>
                <p><em>Como profissional</em>, pretendo me dedicar com maestria, a cada dia me tornar uma profissional melhor e representar as mulheres neste universo onde precisa tanto de representantes femininas.
                Quero cada dia mais impactar pessoas com meu trabalho, meu jeito acolhedor de ser, minha dedicação, resiliência e perseverança. </p>
                <p><strong>Descobri finalmente o que faz meus olhos brilharem. </strong>Hoje sei que estou no caminho que sempre quis estar.</p>
                <p>Agradeço a sua visita, me siga nas redes sociais. Até breve.</p>
              </div>
            </div>
            <div className="icon-redes">
              <a href="https://github.com/NandaTMarques" className="">
                <img src={github} alt=""/>
              </a>
              <a href="https://www.linkedin.com/in/fernandadesenvolvedoraweb/" className="">
                <img src={linkedin} alt=""/>
              </a>
              <a href="https://www.instagram.com/fernandateixmarques/" className="">
                <img src={instagram} alt=""/>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default AboutMe;
