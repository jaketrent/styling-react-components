import React from 'react'
import { ThemeProvider } from '@friendsofreactjs/react-css-themr'

import './App.css'
import Newsletter from './Newsletter.js'
import * as css from './NewsletterOverride.module.css'

const theme = {
  Newsletter: css
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
