import React, { Component } from 'react';
import FotoItem from './FotoItem';

export default class Timeline extends Component {

    constructor() {
        super();
        this.state = { fotos: [] };
    }

    async componentDidMount() {
        const token = localStorage.getItem('auth-token');
        const res = await fetch(`http://localhost:8080/api/fotos?X-AUTH-TOKEN=${token}`);
        const fotos = await res.json();
        this.setState({ fotos });
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