import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      translateX: 0,
      translateY: 0,
      scale: 1,
      clicked: false
    }
  }

  handleMouseDown = ({pageX, pageY}) => {
    console.log(pageX, pageY);
    this.setState({clicked: true, translateX: pageX, translateY: pageY, scale: 2});
  }

  handleMouseMove = ({pageX, pageY}) => {
    if (this.state.clicked) {
      this.setState({translateX: pageX, translateY: pageY})
    }
  }

  handleMouseUp = ({pageX, pageY}) => {
    console.log(pageX, pageY);
    this.setState({scale: 1, clicked: false});
  }

  render = () => {
    return (
      <div onMouseDown={this.handleMouseDown} className={'myContainer'}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}>
        <h1 style={{transform: `translate3d(${this.state.translateX}px,
          ${this.state.translateY}px, 0) scale(${this.state.scale})`}}>
          Click on Something inside the div
        </h1>
      </div>
    );
  }
}

export default App;
