import React, { Component } from 'react';
import FotoItem from './FotoItem';
import { CSSTransitionGroup } from 'react-transition-group';
import TimelineService from '../services/TimelineService';
import { connect } from 'react-redux';

class Timeline extends Component {

    constructor(props) {
        super(props);
        this.name = this.props.name;
    }

    async carregaFotos() {
        this.props.lista(this.name);
    }

    componentDidMount() {
        this.carregaFotos();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.name !== this.name) {
            this.name = nextProps.name;
        }
        this.carregaFotos();
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
                        this.props.fotos.map(foto => {
                            this.setFakePictures(foto);
                            return <FotoItem
                                key={foto.id}
                                foto={foto}
                                like={this.props.like}
                                comenta={this.props.comenta} />;
                        })
                    }
                </CSSTransitionGroup>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { fotos: state.timeline };
};

const mapDispatchToProps = dispatch => {
    return {
        like: fotoId => {
            dispatch(TimelineService.like(fotoId));
        },
        comenta: (fotoId, textoComentario) => {
            dispatch(TimelineService.comenta(fotoId, textoComentario));
        },
        lista: (name) => {
            dispatch(TimelineService.lista(name));
        }
    }
};

const TimelineContainer = connect(mapStateToProps, mapDispatchToProps)(Timeline);
export default TimelineContainer;
