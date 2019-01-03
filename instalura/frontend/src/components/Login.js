import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = queryString.parse(this.props.location.search);
    }

    async envia(event) {
        try {
            event.preventDefault();
            const requestInfo = {
                method: 'POST',
                body: JSON.stringify({ login: this.login.value, senha: this.senha.value }),
                headers: new Headers({
                    'Content-type': 'application/json'
                })
            };

            const res = await fetch('http://localhost:8080/api/public/login', requestInfo);

            if (!res.ok) {
                throw new Error('Não foi possível fazer o login');
            }

            const token = await res.text();
            localStorage.setItem('auth-token', token);

            this.props.history.push('/timeline');
        } catch (err) {
            this.setState({ msg: err.message });
        }
    }

    render() {
        return (
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <span>{this.state.msg}</span>
                <form onSubmit={this.envia.bind(this)}>
                    <input type="text" ref={(input) => this.login = input} />
                    <input type="password" ref={(input) => this.senha = input} />
                    <input type="submit" value="login" />
                </form>
            </div>
        );
    }
}

export default withRouter(Login);
