// index.js

import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render() {
    return (
      <h1>Hello from Electron, React and Webpack!</h1>
    )
  }
}

render(<App/>, document.getElementById('app'));
