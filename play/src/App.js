import React from 'react'

import './App.css'
import Newsletter from './Newsletter.js'
import NewsletterStyledComponent from './NewsletterStyledComponent.js'
import * as css from './NewsletterOverride.module.css'

function App() {
  return (
    <div className="App">
      <p>CSS mod</p>
      <div className="App-newsletter">
        <Newsletter theme={css} />
      </div>
      <p>Styled</p>
      <div className="App-newsletter">
        <NewsletterStyledComponent />
      </div>
    </div>
  )
}

export default App
