import React, { Component} from "react";
import { MainText } from "./components/MainText"
import css from './assets/App.css';

export default class App extends Component{
  constructor() {
    super()
    this.state = {interval: 3000}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let value = event.target.value
    if (value < 0) {
      value = 0
    }
    if (value > 3600000) {
      value = 3600000
    }
    this.setState({interval: value})
  }
  
  render() {
    return(
      <div className="App">

      <div className="credits">
         Made by <a target="_blank" href="https://stevenkoerts.nl/">Steven Koerts</a> <a target="_blank" href="https://github.com/Steven24K">GitHub</a>
      </div>

      <MainText interval={this.state.interval}/>

      <div className="interval-input">
          <div className="slider">
            <label>Speed:</label>
            <input min="500" max="30000" type="range" value={this.state.interval} onChange={this.handleChange}/>
          </div>

          <div className="number-input">
            <input onChange={this.handleChange} type="number" value={this.state.interval}/> ms
          </div>
      </div>

      </div>
    );
  }

}



