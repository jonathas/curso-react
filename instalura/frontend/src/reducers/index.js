import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { timeline } from './timeline';
import { notificacao } from './header';

export default (history) => combineReducers({
    router: connectRouter(history),
    timeline, notificacao
})