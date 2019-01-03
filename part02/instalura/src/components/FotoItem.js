import React, { Component } from 'react';

class FotoAtualizacoes extends Component {
    render(){
        return (
            <section className="fotoAtualizacoes">
              <button className="fotoAtualizacoes-like">Likar</button>
              <form className="fotoAtualizacoes-form">
                <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo"/>
                <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit"/>
              </form>

            </section>            
        );
    }
}

class FotoInfo extends Component {
    render(){
        return (
            <div className="foto-info">
              <div className="foto-info-likes">
              {
                this.props.foto.likers.map(liker => {
                  return (<button key="{liker.login}">{liker.login},</button>)
                })  
              }

              curtiram

              </div>

              <p className="foto-info-legenda">
                <button className="foto-info-autor">autor </button>
                {this.props.foto.comentario}
              </p>

            <ul className="foto-info-comentarios">
                {
                this.props.foto.comentarios.map(comentario => {
                  return (
                    <li className="comentario" key={comentario.id}>
                      <button className="foto-info-autor">{comentario.login} </button>
                      {comentario.texto}
                    </li>
                    );
                  })
                }
              </ul>
            </div>            
        );
    }
}

class FotoHeader extends Component {
  render() {
        return (
            <header className="foto-header">
              <figure className="foto-usuario">
              <img src={this.props.foto.urlPerfil} alt="foto do usuario"/>
                <figcaption className="foto-usuario">
                  <button>
                    {this.props.foto.loginUsuario}
                  </button>  
                </figcaption>
              </figure>
            <time className="foto-data">{this.props.foto.horario}</time>
            </header>            
        );
    }
}

export default class FotoItem extends Component {
  render() {
        return (
          <div className="foto">
            <FotoHeader foto={this.props.foto} />
            <img alt="foto" className="foto-src" src={this.props.foto.urlFoto}/>
            <FotoInfo foto={this.props.foto}/>
            <FotoAtualizacoes/>
          </div>            
        );
    }
}
