import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer>
      <div className="footer-up">
        <div className="container">
          <div className="card-row">
            <div className="footer-box">
              <h3>Links Úteis</h3>
              <a href="https://www.betrybe.com/" className="footer-link">Trybe - Escola de Programação</a>
              <a href="https://www.mairovergara.com/" className="footer-link">Curso de Inglês Mairo Vergara</a>
              <a href="https://www.codewars.com/" className="footer-link">Code Wars - Alcance a maestria por meio de desafios</a>
              <a href="https://exercism.io/" className="footer-link">Exercism - Mentoria prática de código para todos</a>
            </div>
            <div className="footer-box" id="contact">
              <a id="contact-anchor" className="anchor"></a>
              <h3>Onde me encontrar?</h3>
              <div className="footer-link-wrapper">
                <a href="https://www.instagram.com/fernandateixmarques/" className="footer-link">Instagram</a>
              </div>
              <div className="footer-link-wrapper">
                <a href="https://www.linkedin.com/in/fernandadesenvolvedoraweb/" className="footer-link">LinkedIn</a>
              </div>
              <a href="https://github.com/NandaTMarques" className="footer-link">GitHub</a>
              <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5516999731802" className="footer-link">+55 (16)
                99973-1802</a>
              <a href="mailto:nandateixmarques@gmail.com" className="footer-link">nandateixmarques@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-down">
        <p>© 2021 Fernanda Marques | Front-end Developer | Brazil</p>
      </div>
    </footer>
    )
  }
}

export default Footer;