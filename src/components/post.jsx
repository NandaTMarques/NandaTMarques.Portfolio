import React, { Component } from 'react';
import Typing from 'react-typing-animation';

class Post extends Component {
  render() {
    return (
      <section id="welcome-section" className="hero">
        <div className="container-post">
          <Typing speed={70}>
            <p>Olá, meu nome é Fernanda, sou desenvolvedora front-end,
              eu amo aprender coisas novas e resolver problemas.
              Estou sempre a procura de algo que me desafie.
            </p>
          </Typing>
        </div>
      </section>
    )
  }
}

export default Post;
