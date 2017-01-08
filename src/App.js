import Inferno from 'inferno';
// import Component from 'inferno-component';

import React from 'react';
// import ReactDOM from 'react-dom';
import ons from 'onsenui';
import {Button, Toolbar} from 'react-onsenui';

import Logo from './components/logo';

import '../node_modules/onsenui/css/onsenui.css';
import '../node_modules/onsenui/css/onsen-css-components.css';

import './assets/css/App.css';




class App extends React.Component {
  handleClick () {
    ons.notification.alert('onsenui integration done');
  }

  render() {
    return (
      <div className="App">
        <Toolbar>
          <div class="left">
            <ons-back-button>Back</ons-back-button>
          </div>
          <div class="center">Title</div>
          <div class="right">
            <ons-toolbar-button>
              <ons-icon icon="md-menu"></ons-icon>
            </ons-toolbar-button>
          </div>
        </Toolbar>
        <div className="App-header">
          <Logo width="80" height="80"/>
          <h2>Welcome to Inferno</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Done :)
        </p>
        <Button onClick={this.handleClick}>onsenui Test!</Button>
      </div>
    );
  }
}

export default App;
