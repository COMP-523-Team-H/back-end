import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Annotate from './components/Annotate';
import './App.css';

class App extends Component {
  state = {
    currentView: <Home />
  }

  setView(view) {
    this.setState({
      currentView: view
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        {this.state.currentView}
      </div>
    );
  }
}

export default App;