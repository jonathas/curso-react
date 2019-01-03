import React, { Component } from 'react';
import Pubsub from 'pubsub-js';

export default class Header extends Component {

  async pesquisa(event) {
    try {
      event.preventDefault();

      const res = await fetch(`http://localhost:8080/api/public/fotos/${this.loginPesquisado.value}`);
      const fotos = await res.json();

      Pubsub.publish('timeline', {fotos});
    } catch (err) {
      console.log(err.message); 
    }
  }

  render() {
    return (
      <header className="header container">
        <h1 className="header-logo">
          Instalura
          </h1>

        <form className="header-busca" onSubmit={this.pesquisa.bind(this)}>
          <input type="text" name="search" placeholder="Pesquisa" className="header-busca-campo" ref={input => this.loginPesquisado = input} />
          <input type="submit" value="Buscar" className="header-busca-submit" />
        </form>


        <nav>
          <ul className="header-nav">
            <li className="header-nav-item">
              <button>
                ♡
                  {/*                 ♥ */}
                {/* Quem deu like nas minhas fotos */}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}