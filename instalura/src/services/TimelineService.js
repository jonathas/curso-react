import Pubsub from 'pubsub-js';
import InstaluraService from './InstaluraService';

export default class TimelineService {

    constructor(fotos) {
        this.fotos = fotos;
        this.instaluraService = new InstaluraService();
    }

    async lista(name) {
        const res = (!name) ?
            await this.instaluraService.listaFotos() :
            await this.instaluraService.listaFotosPublicas(name);
        
        this.fotos = await res.json();
        this._updateTimeline();
    }

    async like(fotoId) {
        try {
            const res = await this.instaluraService.like(fotoId);
            if (!res.ok) {
                throw new Error('Não foi possível realizar o like da foto');
            }

            const liker = await res.json();
            this._updateLike(fotoId, liker);
        } catch (err) {
            console.log(err.message);
        }
    }

    _updateLike(fotoId, liker) {
        const fotoAchada = this.fotos.find(foto => foto.id === fotoId);
        fotoAchada.likeada = !fotoAchada.likeada;

        const possivelLiker = fotoAchada.likers.find(likerAtual => likerAtual.login === liker.login);

        if (!possivelLiker) {
            fotoAchada.likers.push(liker);
        } else {
            const novosLikers = fotoAchada.likers.filter(likerAtual => likerAtual.login !== liker.login);
            fotoAchada.likers = novosLikers;
        }

        this._updateTimeline();
    }

    _updateTimeline() {
        Pubsub.publish('timeline', { fotos: this.fotos });
    }

    async comenta(fotoId, textoComentario) {
        try {
            const res = await this.instaluraService.comenta(fotoId, textoComentario);
            if (!res.ok) {
                throw new Error('Não foi possível comentar');
            }

            const novoComentario = await res.json();
            const fotoAchada = this.fotos.find(foto => foto.id === fotoId);
            fotoAchada.comentarios.push(novoComentario);

            this._updateTimeline();

            return true;
        } catch (err) {
            console.log(err.message);
            return false;
        }
    }

    subscribe(callback) {
        Pubsub.subscribe('timeline', (topico, fotosInfo) => {
            callback(fotosInfo.fotos);
        });
    }

}
