import React, { Component } from 'react';
import TimelineService from '../services/TimelineService';

export default class Header extends Component {

  async pesquisa(event) {
    event.preventDefault();
    this.props.store.dispatch(TimelineService.pesquisa(this.loginPesquisado.value));
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