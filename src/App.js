import Inferno from 'inferno';
// import Component from 'inferno-component';

import React from 'react';
// import ReactDOM from 'react-dom';
import ons from 'onsenui';
import {Page, Button, Toolbar} from 'react-onsenui';

import Logo from './components/logo';

import '../node_modules/onsenui/css/onsenui.css';
import '../node_modules/onsenui/css/onsen-css-components.css';

import './assets/css/App.css';




class App extends React.Component {
  handleClick () {
    ons.notification.alert('Hello World');
  }

  render() {
    return (
      <Page className="App">
        <Toolbar>
          <div class="center">Inferno Mobile</div>
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
        </p>
        <Button onClick={this.handleClick}>Say Hello</Button>
      </Page>
    );
  }
}

export default App;
