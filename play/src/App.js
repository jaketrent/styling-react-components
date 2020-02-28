import React from 'react'

import './App.css'
import Newsletter from './Newsletter.js'
import * as css from './NewsletterOverride.module.css'

function App() {
  return (
    <div className="App">
      <p>Before para</p>
      <div className="App-newsletter">
        <Newsletter theme={css} />
      </div>
      <p>After para</p>
    </div>
  )
}

export default App
