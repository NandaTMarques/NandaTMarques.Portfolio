import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderPage extends Component {
  render () {
    return (
      <header id="navbar">
        <div className="container">
          <a className="logo" href="#about-me-anchor">Fernanda Marques</a>
          <nav className="nav-container">
            <Link to="/" className="">Home</Link>
            <a href="#portfolio-anchor">Projetos</a>
            <a href="https://drive.google.com/file/d/1dvhoMEH9DfuN53rF_EAFKA5BwxcnDRd7/view?usp=sharing">Download CV</a>
            <a href="#contact-anchor">Contatos</a>
          </nav>
        </div>
      </header>
    )
  }
}

export default HeaderPage;