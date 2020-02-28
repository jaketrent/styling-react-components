import React from 'react'
import { ThemeProvider as ThemrProvider } from '@friendsofreactjs/react-css-themr'
import { ThemeProvider } from 'styled-components'

import './App.css'
import Newsletter from './Newsletter.js'
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
      <p>CSS mod</p>
      <ThemrProvider theme={themrTheme}>
        <div className="App-newsletter">
          <Newsletter />
        </div>
      </ThemrProvider>
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
