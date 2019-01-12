export function listagem(fotos) {
    return { type: 'LISTA', fotos };
}

export function search(fotos) {
    return { type: 'PESQUISA', fotos };
}

export function curtir(fotoId, liker) {
    return { type: 'LIKE', fotoId, liker };
}

export function comentario(fotoId, novoComentario) {
    return { type: 'COMENTARIO', fotoId, novoComentario };
}
