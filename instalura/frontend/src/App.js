import React, { Component } from 'react';
import './css/reset.css';
import './css/login.css';
import './css/timeline.css';
import Header from './components/Header';
import Timeline from './components/Timeline';
import { createStore } from 'redux';
import { timeline } from './reducers/timeline';

const store = createStore(timeline);

class App extends Component {
  render() {
    const name = (this.props.match) ? this.props.match.params.name : '';
    return (
      <div id="root">
        <div className="main">
          <Header />
          <Timeline name={name} store={store} />
        </div>
      </div>
    );
  }
}

export default App;
