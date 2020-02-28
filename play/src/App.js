import React from 'react'
import { ThemeProvider } from 'styled-components'

import './App.css'
import Newsletter from './Newsletter.js'
import NewsletterStyledComponent from './NewsletterStyledComponent.js'
import * as css from './NewsletterOverride.module.css'

const styledComponentsTheme = {
  header: {
    fg: '#ff598a'
  },
  input: {
    color: '#fff',
    background: '#070222',
    textAlign: 'center'
  },
  inputFocus: {
    outline: '2px solid #5e9fff'
  }
}

function App() {
  return (
    <div className="App">
      <p>CSS mod</p>
      <div className="App-newsletter">
        <Newsletter theme={css} />
      </div>
      <ThemeProvider theme={styledComponentsTheme}>
        <p>Styled</p>
        <div className="App-newsletter">
          <NewsletterStyledComponent />
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
