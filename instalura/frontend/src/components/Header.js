import React, { Component } from 'react';
import TimelineService from '../services/TimelineService';
import { connect } from 'react-redux';

class Header extends Component {

  constructor() {
    super();
    this.state = { msg: '' };
  }

  async pesquisa(event) {
    event.preventDefault();
    this.props.lista(this.loginPesquisado.value);
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
              <span>{this.state.msg}</span>
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

const mapStateToProps = state => {
  return { msg: state.msg };
};

const mapDispatchToProps = dispatch => {
  return {
    lista: (name) => {
      dispatch(TimelineService.lista(name));
    }
  }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
