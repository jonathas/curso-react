import { listagem, search, curtir, comentario, notifica } from '../actions/actionCreator';
import InstaluraService from './InstaluraService';

class TimelineService {

    constructor() {
        this.instaluraService = new InstaluraService();
    }

    pesquisa(name) {
        return async dispatch => {
            try {
                if (!name) {
                    throw new Error('O valor pesquisado não pode ser vazio');
                }

                const res = await this.instaluraService.listaFotosPublicas(name);
                const fotos = await res.json();

                if (fotos.length === 0) {
                    dispatch(notifica('Usuário não encontrado'));
                } else {
                    dispatch(notifica('Usuário encontrado'));
                }

                dispatch(search(fotos));
                return fotos;
            } catch (err) {
                console.log(err.message);
            }
        };
    }

    lista(name) {
        return async dispatch => {
            const res = (!name) ?
                await this.instaluraService.listaFotos() :
                await this.instaluraService.listaFotosPublicas(name);

            const fotos = await res.json();
            dispatch(listagem(fotos));
            return fotos;
        };
    }

    like(fotoId) {
        return async dispatch => {
            try {
                const res = await this.instaluraService.like(fotoId);
                if (!res.ok) {
                    throw new Error('Não foi possível realizar o like da foto');
                }

                const liker = await res.json();
                dispatch(curtir(fotoId, liker));
                return liker;
            } catch (err) {
                console.log(err.message);
            }
        }
    }

    comenta(fotoId, textoComentario) {
        return async dispatch => {
            try {
                const res = await this.instaluraService.comenta(fotoId, textoComentario);
                if (!res.ok) {
                    throw new Error('Não foi possível comentar');
                }

                const novoComentario = await res.json();

                dispatch(comentario(fotoId, novoComentario));
                return true;
            } catch (err) {
                console.log(err.message);
                return false;
            }
        }
    }

}

export default new TimelineService();
