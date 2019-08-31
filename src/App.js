import React, { Component } from 'react';
import './App.css';
import './App.scss';
import Title from './Title.js';
//import PropTypes from 'prop-types';

const blue = '#2cd9f08e';
const green =  '#39D1B4';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: blue
    };
    this.changeColor = this.changeColor.bind(this)
  }
  changeColor(){//d notation
    const newColor = this.state.color === green? blue : green;
    this.setState({ color: newColor});
  }
  setPoints(amount){
    this.points = amount;
  }
  render() {
    return (
      <div style={{background:this.state.color}} className="App">
        <h1 id='header'>Hello {this.props.firstName}</h1>
        <Title text = 'CSS CLIP HOVER PATH'/>
        <h2>CSS CLIP HOVER PATH</h2>
        <p>Enjoy</p>
            <li>String items</li>
        <button id='btn' onClick={this.changeColor}>
          Click me to change the color
        </button>
      </div>
    )
  }
}

var element = new App();
element.setPoints(32);//?

export default App;

App.defaultProps ={
  firstName: "User "
}
/*
App.propTypes ={
  firstName: React.propTypes.string
}//TypeError: Cannot read property 'string' of undefined
  or
  static propTypes ={
    firstName: PropTypes.string.isRequired
  } in class body also causes error
const stringProps = JSON.stringify(this.props);
*/


