import React, { Component } from 'react';
import FotoItem from './FotoItem';

export default class Timeline extends Component {

    constructor(props) {
        super(props);
        this.state = { fotos: [] };
        this.name = this.props.name;
    }

    async carregaFotos() {
        let urlPerfil;
        let res;

        if (!this.name) {
            const requestInfo = {
                headers: new Headers({
                    'X-AUTH-TOKEN': localStorage.getItem('auth-token')
                })
            };
            urlPerfil = `http://localhost:8080/api/fotos`;
            res = await fetch(urlPerfil, requestInfo);
        } else {
            urlPerfil = `http://localhost:8080/api/public/fotos/${this.name}`;
            res = await fetch(urlPerfil);
        }

        const fotos = await res.json();
        this.setState({
            fotos
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

    componentDidUpdate(prevProps) {
        if (this.name !== prevProps.name) {
            this.name = prevProps.name;
        }
        this.carregaFotos();
    }

    render() {
        return (
            <div className="fotos container">
                {            
                    this.state.fotos.map(foto => {
                        // this is important because the instagram images in the API were expired
                        foto.urlPerfil = 'https://scontent-prg1-1.cdninstagram.com/vp/86f9457c8a8304713eb76abdff6cc362/5CD7F329/t51.2885-19/s150x150/34036284_881108158745300_435198002332696576_n.jpg?_nc_ht=scontent-prg1-1.cdninstagram.com';

                        foto.urlFoto = 'https://scontent-prg1-1.cdninstagram.com/vp/78d10c2c171ad21299d44dc81b3b9377/5CC2B6DD/t51.2885-15/e35/46877293_771225333212686_8376465897876997487_n.jpg?_nc_ht=scontent-prg1-1.cdninstagram.com';

                        return <FotoItem key={foto.id} foto={foto} />;
                    })
                }
            </div>
        );
    }
}