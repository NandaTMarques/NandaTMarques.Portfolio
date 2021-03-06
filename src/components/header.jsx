import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render () {
    return (
      <header id="navbar">
        <a className="logo" href="#about-me-anchor">Fernanda Marques</a>
        <nav className="nav-container">
          <Link to="/" className="">Home</Link>
          <a href="#about-me-anchor">Sobre mim</a>
          <a href="#skills-anchor">Skills</a>
          <a href="#portfolio-anchor">Projetos</a>
          <a href="https://drive.google.com/file/d/1dvhoMEH9DfuN53rF_EAFKA5BwxcnDRd7/view?usp=sharing">Download CV</a>
          <a href="#contact-anchor">Contatos</a>
        </nav>
      </header>
    )
  }
}

export default Header;
