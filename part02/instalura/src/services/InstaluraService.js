
export default class InstaluraService {

    constructor() {
        this.baseUrl = 'http://localhost:8080/api';
        this.headers = new Headers({
            'Content-type': 'application/json',
            'X-AUTH-TOKEN': localStorage.getItem('auth-token')
        });
    }

    listaFotos() {
        return fetch(`${this.baseUrl}/fotos`, { headers: this.headers });
    }

    listaFotosPublicas(name) {
        return fetch(`${this.baseUrl}/public/fotos/${this.name}`);
    }

    like(fotoId) {
        const requestInfo = {
            method: 'POST',
            headers: this.headers
        };

        return fetch(`${this.baseUrl}/fotos/${fotoId}/like`, requestInfo);
    }

    comenta(fotoId, textoComentario) {
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({ texto: textoComentario }),
            headers: this.headers
        };

        return fetch(`${this.baseUrl}/fotos/${fotoId}/comment`, requestInfo);
    }

}