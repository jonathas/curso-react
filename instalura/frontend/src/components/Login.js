import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import InstaluraService from '../services/InstaluraService';

class Login extends Component {

    constructor(props) {
        super(props);
        this.instaluraService = new InstaluraService();
        this.state = queryString.parse(this.props.location.search);
    }

    async envia(event) {
        try {
            event.preventDefault();
            await this.instaluraService.login(this.login.value, this.senha.value);
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
