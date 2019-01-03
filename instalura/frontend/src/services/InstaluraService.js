export default class InstaluraService {

    constructor() {
        this.apiBase = process.env.REACT_APP_API_BASE;
        this.headers = new Headers({
            'Content-type': 'application/json',
            'X-AUTH-TOKEN': localStorage.getItem('auth-token')
        });
    }

    async login(login, senha) {
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({ login, senha }),
            headers: this.headers
        };

        const res = await fetch(`${this.apiBase}/public/login`, requestInfo);
        if (!res.ok) {
            throw new Error('Não foi possível fazer o login');
        }

        const token = await res.text();
        localStorage.setItem('auth-token', token);
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