import * as React from 'react'

import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      author: null,
      text: null
    }
  }
  render () {
    return (
      <div className="App">
        <div id="quote-box">
          <p id="author">Author</p>
          <p id="text">Text</p>
          <button id="new-quote">New Quote</button>
        </div>
      </div>
    )
  }
}

export default App
