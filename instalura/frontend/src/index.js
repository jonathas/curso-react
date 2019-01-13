import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import Logout from './components/Logout';
import * as serviceWorker from './serviceWorker';
import { Route, Switch } from 'react-router';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import configureStore, { history } from './store/configureStore';

const store = configureStore();

function isLoggedIn() {
    return (localStorage.getItem('auth-token') === null) ? false : true;
}

const notAllowedMsg = "/?msg=Você precisa estar logado para acessar o endereço";

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/timeline" render={() => (
                    isLoggedIn() ? (
                        <App />
                    ) : (
                            <Redirect to={notAllowedMsg} />
                        )
                )} />
                <Route exact path="/timeline/:name" component={App} />
                <Route path="/logout" component={Logout} />
            </Switch>
            </BrowserRouter>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
