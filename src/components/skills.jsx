import React, { Component } from 'react';

class Skills extends Component {
  render () {
    return (
      <section id="stack" className="stack-box">
        <a id="skills-anchor" className="anchor"></a>
        <div className="container">
          <div className="title-group">
            <h2>Skills</h2>
          </div>
          <div className="card-row">
            <div className="card">
              <h3>HTML 5</h3>
              <h3>CSS 3</h3>
              <h3>JavaScript ES6</h3>
              <h3>React.js</h3>
              <h3>Redux</h3>
              <h3>Context API</h3>
              <h3>TDD/JEST</h3>
              <h3>Bootstrap e Bulma</h3>
              <h3>Git / GitHub</h3>
              <h3>Princípios CodeClean</h3>
            </div>
            <div className="card">
              <h3>Node JS</h3>
              <h3>Express</h3>
              <h3>REST</h3>
              <h3>MySQL</h3>
              <h3>MongoDB</h3>
              <h3>Heroku</h3>
              <h3>Mocha</h3>
              <h3>Arquitetura SOLID e ORM</h3>
              <h3>Scrum e Kanban</h3>
            </div>
            <div className="card">
              <h3>Aprender a aprender</h3>
              <h3>Autoconhecimento</h3>
              <h3>Comunicação</h3>
              <h3>Resiliência</h3>
              <h3>Comprometimento</h3>
              <h3>Organização</h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Skills;