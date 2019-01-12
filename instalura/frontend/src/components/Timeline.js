import React, { Component } from 'react';
import FotoItem from './FotoItem';
import { CSSTransitionGroup } from 'react-transition-group';
import TimelineService from '../services/TimelineService';

export default class Timeline extends Component {

    constructor(props) {
        super(props);
        this.state = { fotos: [] };
        this.name = this.props.name;
    }

    async carregaFotos() {
        this.props.store.dispatch(TimelineService.lista(this.name));
    }

    componentWillMount() {
        this.props.store.subscribe(() => {
            const fotos = this.props.store.getState().timeline;
            if (fotos && fotos.length > 0) {
                this.name = fotos[0].loginUsuario;
            }
            this.setState({ fotos });
        });
    }

    componentDidMount() {
        this.carregaFotos();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.name !== '') {
            this.name = nextProps.name;
        }
        this.carregaFotos();
    }

    like(fotoId) {
        this.props.store.dispatch(TimelineService.like(fotoId));
    }

    comenta(fotoId, textoComentario) {
        return this.props.store.dispatch(TimelineService.comenta(fotoId, textoComentario));
    }

    // this is important because the instagram images in the API were expired
    setFakePictures(foto) {
        foto.urlPerfil = 'https://scontent-prg1-1.cdninstagram.com/vp/86f9457c8a8304713eb76abdff6cc362/5CD7F329/t51.2885-19/s150x150/34036284_881108158745300_435198002332696576_n.jpg?_nc_ht=scontent-prg1-1.cdninstagram.com';

        foto.urlFoto = 'https://scontent-prg1-1.cdninstagram.com/vp/78d10c2c171ad21299d44dc81b3b9377/5CC2B6DD/t51.2885-15/e35/46877293_771225333212686_8376465897876997487_n.jpg?_nc_ht=scontent-prg1-1.cdninstagram.com';
    }

    render() {
        return (
            <div className="fotos container">
                <CSSTransitionGroup
                    transitionName="timeline"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {
                        this.state.fotos.map(foto => {
                            this.setFakePictures(foto);
                            return <FotoItem
                                key={foto.id}
                                foto={foto}
                                like={this.like.bind(this)}
                                comenta={this.comenta.bind(this)} />;
                        })
                    }
                </CSSTransitionGroup>
            </div>
        );
    }
}