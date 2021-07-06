import React, { Component } from 'react';
import Typing from 'react-typing-animation';

class Post extends Component {
  render() {
    return (
      <section id="welcome-section" className="hero">
        <div className="container-post">
          <Typing speed={60}>
            <p>Olá, sou a Fernanda, desenvolvedora front-end, eu amo aprender coisas novas e vivo em busca de desafios.
            </p>
          </Typing>
        </div>
      </section>
    )
  }
}

export default Post;
