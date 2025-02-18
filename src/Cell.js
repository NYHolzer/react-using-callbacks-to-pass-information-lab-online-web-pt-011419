import React, { Component } from 'react';
import {getSetColor} from './Matrix'

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    const newColor = this.props.getSetColor()
    this.setState({
      color: newColor
    })
  }
  
  render() {
    return (
      <div className="cell" 
           style={{backgroundColor: this.state.color}}
           onClick={this.handleClick}>
      </div>
    )
  }
  
}
