import React, { Component } from 'react';

class FotoAtualizacoes extends Component {
    render(){
        return (
            <section className="fotoAtualizacoes">
              <a href="#" className="fotoAtualizacoes-like">Likar</a>
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

                <a href="#">
                  alots_ssa
                </a>

                ,

                <a href="#">
                  rafael_rollo
                </a> 

                 curtiram

              </div>

              <p className="foto-info-legenda">
                <a className="foto-info-autor">autor </a>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?
              </p>

              <ul className="foto-info-comentarios">
                <li className="comentario">
                  <a className="foto-info-autor">seguidor </a>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad, molestiae.
                </li>
                <li className="comentario">
                  <a className="foto-info-autor">seguidor </a>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cumque earum molestias voluptatem modi nihil sit magnam ratione eveniet distinctio magni error asperiores dignissimos tempora expedita, laborum ex soluta hic maiores veritatis deserunt.
                </li>
                <li className="comentario">
                  <a className="foto-info-autor">seguidor </a>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum laudantium quae ab fuga odio delectus maiores voluptatibus sit commodi quidem.
                </li>
              </ul>
            </div>            
        );
    }
}

class FotoHeader extends Component {
    render(){
        return (
            <header className="foto-header">
              <figure className="foto-usuario">
                <img src="https://scontent-prg1-1.cdninstagram.com/vp/86f9457c8a8304713eb76abdff6cc362/5CD7F329/t51.2885-19/s150x150/34036284_881108158745300_435198002332696576_n.jpg?_nc_ht=scontent-prg1-1.cdninstagram.com" alt="foto do usuario"/>
                <figcaption className="foto-usuario">
                  <a href="#">
                    alots
                  </a>  
                </figcaption>
              </figure>
              <time className="foto-data">03/10/2016 20:13</time>
            </header>            
        );
    }
}

export default class FotoItem extends Component {
    render(){
        return (
          <div className="foto">
            <FotoHeader/>
            <img alt="foto" className="foto-src" src="https://scontent-prg1-1.cdninstagram.com/vp/78d10c2c171ad21299d44dc81b3b9377/5CC2B6DD/t51.2885-15/e35/46877293_771225333212686_8376465897876997487_n.jpg?_nc_ht=scontent-prg1-1.cdninstagram.com"/>
            <FotoInfo/>
            <FotoAtualizacoes/>
          </div>            
        );
    }
}
