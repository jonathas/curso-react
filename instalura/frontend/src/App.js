import React, { Component } from 'react';
import './css/reset.css';
import './css/login.css';
import './css/timeline.css';
import Header from './components/Header';
import Timeline from './components/Timeline';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { timeline } from './reducers/timeline';
import { notificacao } from './reducers/header';

const reducers = combineReducers({ timeline, notificacao });
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

class App extends Component {
  render() {
    const name = (this.props.match) ? this.props.match.params.name : '';
    return (
      <div id="root">
        <div className="main">
          <Header store={store} />
          <Timeline name={name} store={store} />
        </div>
      </div>
    );
  }
}

export default App;
