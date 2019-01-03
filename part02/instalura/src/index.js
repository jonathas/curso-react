import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import * as serviceWorker from './serviceWorker';
import { Route, Switch } from 'react-router';
import { BrowserRouter, Redirect } from 'react-router-dom';

function isLoggedIn() {
    return (localStorage.getItem('auth-token') === null) ? false : true;
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/timeline" render={() => (
                isLoggedIn() ? (
                    <App/>
                ) : (
                    <Redirect to="/?msg=Você precisa estar logado para acessar o endereço"/>
                )
            )} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();