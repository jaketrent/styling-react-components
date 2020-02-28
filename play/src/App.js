import React from 'react'
import { ThemeProvider as ThemrProvider } from '@friendsofreactjs/react-css-themr'
import { ThemeProvider } from 'styled-components'

import './App.css'
import './NewsletterOverride.css'
import Newsletter from './Newsletter.js'
import NewsletterStylesheet from './NewsletterStylesheet.js'
import NewsletterStyledComponent from './NewsletterStyledComponent.js'
import * as css from './NewsletterOverride.module.css'

const themrTheme = {
  Newsletter: css
}

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
      <p>CSS in JS</p>
      <ThemeProvider theme={styledComponentsTheme}>
        <div className="App-newsletter">
          <NewsletterStyledComponent />
        </div>
      </ThemeProvider>
      <p>CSS stylesheet</p>
      <div className="App-newsletter">
        <NewsletterStylesheet />
      </div>
      <p>CSS mod</p>
      <ThemrProvider theme={themrTheme}>
        <div className="App-newsletter">
          <Newsletter />
        </div>
      </ThemrProvider>
    </div>
  )
}

export default App
