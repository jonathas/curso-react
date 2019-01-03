export default class InstaluraService {

    constructor() {
        this.apiBase = process.env.REACT_APP_API_BASE;
        this.headers = new Headers({
            'Content-type': 'application/json',
            'X-AUTH-TOKEN': localStorage.getItem('auth-token')
        });
    }

    listaFotos() {
        return fetch(`${this.apiBase}/fotos`, { headers: this.headers });
    }

    listaFotosPublicas(name) {
        return fetch(`${this.apiBase}/public/fotos/${name}`);
    }

    like(fotoId) {
        const requestInfo = {
            method: 'POST',
            headers: this.headers
        };

        return fetch(`${this.apiBase}/fotos/${fotoId}/like`, requestInfo);
    }

    comenta(fotoId, textoComentario) {
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({ texto: textoComentario }),
            headers: this.headers
        };

        return fetch(`${this.apiBase}/fotos/${fotoId}/comment`, requestInfo);
    }

}