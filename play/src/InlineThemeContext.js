import React from 'react'

export const ThemeContext = React.createContext({ theme: {} })

export function ThemeProvider(props) {
  return (
    <ThemeContext.Provider value={{ theme: props.theme || {} }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
