import React from 'react'

import './App.css'
import Newsletter from './Newsletter.js'
import { ThemeProvider } from 'styled-components'

const theme = {
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
    <div className="app__newsletter">
      <ThemeProvider theme={theme}>
        <Newsletter />
      </ThemeProvider>
    </div>
  )
}

export default App
