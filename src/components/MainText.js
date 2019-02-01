import React, { Component} from "react";
import { Rgb } from "../models/Rgb"



export class MainText extends Component {
    constructor() {
      super()
      this.state = {greeting: "Hello, there!!!", textColor: new Rgb(0, 0, 0), backgroundColor: new Rgb(255, 255, 255), step: 0}
      this.flashInterval = null
  
      this.changeText = this.changeText.bind(this)
    }
  
    render() {
      document.body.style.backgroundColor = this.state.backgroundColor.getCssColor()
      document.body.style.color = this.state.textColor.getCssColor()
      document.title = this.state.greeting
      
      return <h1 className="main-text"> {this.state.greeting} </h1>
    }
  
    changeText() {
      let newBgColor = this.state.backgroundColor
      newBgColor.changeColor()
      let newTxtColor = this.state.textColor
      newTxtColor.changeColor()

      switch (this.state.step) {
        case 0: 
           this.setState({...this.state, greeting: "Made By", textColor: newTxtColor, backgroundColor: newBgColor, step: 1})
           break;
        case 1:
           this.setState({...this.state, greeting: "Steven K", textColor: newTxtColor, backgroundColor: newBgColor, step: 2})
           break;
        case 2:
           this.setState({...this.state, greeting: "with help of", textColor: newTxtColor, backgroundColor: newBgColor, step: 3})
           break;
        case 3: 
           this.setState({...this.state, greeting: "React JS", textColor: newTxtColor, backgroundColor: newBgColor, step: 0})
           break;
      }
    }
  
    componentDidMount() {
      this.flashInterval = setInterval(this.changeText, this.props.interval)
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.interval != this.props.interval) {
        clearInterval(this.flashInterval)
        this.flashInterval = setInterval(this.changeText, this.props.interval)
      }
    }
  
  }