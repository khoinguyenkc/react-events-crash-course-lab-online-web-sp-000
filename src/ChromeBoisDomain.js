import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {

      drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

   handleMouseClick = (event) => {
     toggleCycling()
   }

   handleKeyPress = (event) => {
     if (event.key.toLowerCase() === 'a' ) {
       console.log('a was pressed')
       resize('+')
     } else if (event.key.toLowerCase() === 's' ) {
       resize('-')
     }
   }
  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleMouseClick}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
