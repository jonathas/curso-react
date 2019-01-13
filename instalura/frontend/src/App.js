import React, { Component } from 'react';
import './css/reset.css';
import './css/login.css';
import './css/timeline.css';
import { PropTypes } from 'prop-types';
import Header from './components/Header';
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    const name = (this.props.match) ? this.props.match.params.name : '';
    return (
      <div id="root">
        <div className="main">
          <Header store={this.context.store} />
          <Timeline name={name} />
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object.isRequired
}

export default App;
