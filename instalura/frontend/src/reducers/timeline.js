// Reducer
export function timeline(state = [], action) {
    if (action.type === 'LISTA') {
        return action.fotos;
    }

    return state;
}