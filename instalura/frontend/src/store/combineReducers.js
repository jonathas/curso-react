import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { timeline } from '../reducers/timeline';
import { notificacao } from '../reducers/header';

export default (history) => combineReducers({
    router: connectRouter(history),
    timeline, notificacao
})