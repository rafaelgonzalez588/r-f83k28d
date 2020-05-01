import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    contador: 0,
  };
  
  cuenta = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  
  render() {
    return (
      <div>
        <span className="value">{this.state.contador}</span>
        <button onClick={this.cuenta} id="inc">Incrementa</button>
      </div>
    );
  }
}

export default App;
