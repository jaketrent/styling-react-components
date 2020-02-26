import React from 'react'

import './App.css'
import Newsletter from './Newsletter.js'

function App() {
  return (
    <div className="App">
      <p>Before para</p>
      <div className="App-newsletter">
        <Newsletter />
      </div>
      <p>After para</p>
    </div>
  )
}

export default App
